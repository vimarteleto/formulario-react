import {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import MuiAlert from '@material-ui/lab/Alert';
import ConfirmDialog from '../ui/ConfirmDialog'
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import InputMask from 'react-input-mask'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    h1: {
        marginBottom: '42px'
    },
    form: {
        maxWidth: '80%',
        margin: '0 auto',
        display: "flex",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '& .MuiFormControl-root': {
            minWidth: '200px',
            maxWidth: '500px',
            marginBottom: '24px',            
        },
        '& Button': {
            height: '42px',
            width: '120px',
            marginLeft: '120px',
        }
    },
    toolbar: {
        justifyContent: 'space-between',
        paddingRight: 0,
        margin: theme.spacing(2, 0)
    }
}))

const formatChars = {
    'A': '[A-Za-z]',
    '0': '[0-9]',
    '#': '[0-9A-Ja-j]'
}
const cpfMask = '000.000.000-00'
const telMask = '(00) 00000-0000'

export default function ClienteForm() {
    
    const classes = useStyles()

    const [cliente, setCliente] = useState({
        id: null,
        nome: '',
        cpf: '',
        rg: '',
        logradouro: '',
        num_imovel: '',
        complemento: '',
        bairro: '',
        municipio: '',
        uf: '',
        telefone: '',
        email: ''
    })

    const [snackState, setSnackState] = useState({
        open: false,
        severity: 'success',
        message: 'Registro salvo com sucesso'
    })

    const [btnSendState, setBtnSendState] = useState({
        disabled: false,
        label: 'Enviar'
    })

    const [dialogOpen, setDialogOpen] = useState(false)
    const [isModified, setIsModified] = useState(false)

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        if(params.id) {
            getData(params.id)
        }
    }, [])

    async function getData(id) {
        try {
            let response = await axios.get(`https://api.faustocintra.com.br/clientes/${id}`)
            setCliente(response.data)
        }
        catch(error) {
            setSnackState({
                open: true,
                severity: 'error',
                message: 'Não foi possível carregar os dados para edição.'
            })
        }
    }

    function handleInputChange(event, property) {

        if(event.target.id) property = event.target.id
    
        if(
            property === 'rg' ||
            property === 'num_imovel'
        ) {
          setCliente({...cliente, [property]: event.target.value.toUpperCase()
            // nao aceita o primeiro caractere como espaço
            .replace(/^\s+/,'')})
        }

        else if(
            property === 'nome' || 
            property === 'municipio'
        ) {
            setCliente({...cliente, [property]: event.target.value.toLowerCase()
                // nao aceita caracteres especiais e nem números
                .replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|\d+|^\s+$/g, '')
                // primeira letra de cada palavra maiúscula
                .replace(/(?:^|\s)\S/g, (value) => {
                    return value.toUpperCase()
                })
            }) 
        }
        else if(
            property === 'logradouro' || 
            property === 'bairro'
        ) {
            setCliente({...cliente, [property]: event.target.value.toLowerCase()
                // nao aceita caracteres especiais, porem aceita números
                .replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|^\s+$/g, '')
                // primeira letra de cada palavra maiúscula
                .replace(/(?:^|\s)\S/g, (value) => {
                    return value.toUpperCase()
                })
            }) 
        }
        else if(property === 'complemento') {
            setCliente({...cliente, [property]: event.target.value
                // nao aceita caracteres especiais, porem aceita números
                .replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|^\s+$/g, '')
                // primeira letra da primeira palavra maiúscula
                .replace(/^\w/, (value) => {
                // .replace(/(?:^|\s)\S/g, (value) => {
                return value.toUpperCase()
                })
            }) 
        }
        else {
          setCliente({...cliente, [property]: event.target.value})
        }
        setIsModified(true)
    }

    async function saveData() {
        try {
            setBtnSendState({disabled: true, label: 'Enviando...'})

            if(params.id) await axios.put(`https://api.faustocintra.com.br/clientes/${params.id}`, cliente)
            else await axios.post('https://api.faustocintra.com.br/clientes', cliente)

            setSnackState({
                open: true,
                severity: 'success',
                message: 'Registro salvo com sucesso!'
            })
        }
        catch(error) {
            setSnackState({
                open: true,
                severity: 'error',
                message: 'ERRO: ' + error.message
            })
        }
        setBtnSendState({disabled: false, label: 'Enviar'})
    }

    function handleSubmit(event) {
        event.preventDefault()
        saveData()
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleSnackClose(event, reason) {
        if(reason === 'clickaway') return
        setSnackState({...snackState, open: false})

        history.push('/list')
    }

    function handleDialogClose(result) {
        setDialogOpen(false)

        if(result) history.push('/list')
    }

    function handleGoBack() {
        if(isModified) setDialogOpen(true)
        else history.push('/list')
    }

    return (
        <>
            <ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose}>
                Há dados não salvos. Deseja realmente voltar?
            </ConfirmDialog>

            <Snackbar open={snackState.open} autoHideDuration={6000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity={snackState.severity}>
                    {snackState.message}
                </Alert>
            </Snackbar>

            <Toolbar className={classes.toolbar}>
                <h1>Novo cadastro</h1>
            </Toolbar>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    id="nome"
                    label="Nome"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.nome}
                    inputProps={{ maxLength: 100 }}
                    onChange={handleInputChange}
                />
                <InputMask
                    id="cpf"
                    formatChars={formatChars}
                    mask={cpfMask}
                    value={cliente.cpf}
                    onChange={event => handleInputChange(event, 'cpf')}
                >
                    {() => <TextField label="CPF" variant="filled" required fullWidth/>}
                </InputMask>
                <TextField
                    id="rg"
                    label="RG"
                    type="text"
                    fullWidth
                    required
                    variant="filled" value={cliente.rg}
                    inputProps={{ maxLength: 20 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="logradouro"
                    label="Logradouro"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.logradouro}
                    inputProps={{ maxLength: 100 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="num_imovel"
                    label="Número"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.num_imovel}
                    inputProps={{ maxLength: 10 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="complemento"
                    label="Complemento"
                    variant="filled"
                    fullWidth
                    value={cliente.complemento}
                    inputProps={{ maxLength: 30 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="bairro"
                    label="Bairro"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.bairro}
                    inputProps={{ maxLength: 50 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="municipio"
                    label="Município"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.municipio}
                    inputProps={{ maxLength: 50 }}
                    onChange={handleInputChange}
                />
                <TextField
                    id="uf" label="UF"
                    fullWidth
                    required
                    select
                    variant="filled"
                    value={cliente.uf}
                    onChange={event => handleInputChange(event, 'uf')}
                >
                    <MenuItem value='AC'>AC</MenuItem>
                    <MenuItem value='AL'>AL</MenuItem>
                    <MenuItem value='AP'>AP</MenuItem>
                    <MenuItem value='AM'>AM</MenuItem>
                    <MenuItem value='BA'>BA</MenuItem>
                    <MenuItem value='CE'>CE</MenuItem>
                    <MenuItem value='DF'>DF</MenuItem>
                    <MenuItem value='ES'>ES</MenuItem>
                    <MenuItem value='GO'>GO</MenuItem>
                    <MenuItem value='MA'>MA</MenuItem>
                    <MenuItem value='MT'>MT</MenuItem>
                    <MenuItem value='MS'>MS</MenuItem>
                    <MenuItem value='MG'>MG</MenuItem>
                    <MenuItem value='PA'>PA</MenuItem>
                    <MenuItem value='PB'>PB</MenuItem>
                    <MenuItem value='PR'>PR</MenuItem>
                    <MenuItem value='PE'>PE</MenuItem>
                    <MenuItem value='PI'>PI</MenuItem>
                    <MenuItem value='RJ'>RJ</MenuItem>
                    <MenuItem value='RN'>RN</MenuItem>
                    <MenuItem value='RS'>RS</MenuItem>
                    <MenuItem value='RO'>RO</MenuItem>
                    <MenuItem value='RR'>RR</MenuItem>
                    <MenuItem value='SC'>SC</MenuItem>
                    <MenuItem value='SP'>SP</MenuItem>
                    <MenuItem value='SE'>SE</MenuItem>
                    <MenuItem value='TO'>TO</MenuItem>
                </TextField>
                <InputMask
                    id="telefone"
                    formatChars={formatChars}
                    mask={telMask}
                    value={cliente.telefone}
                    onChange={event => handleInputChange(event, 'telefone')}
                >
                    {() => <TextField label="Telefone" variant="filled" fullWidth required />}
                </InputMask>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    variant="filled"
                    value={cliente.email}
                    inputProps={{ maxLength: 100 }}
                    onChange={handleInputChange}
                />

                <Toolbar className={classes.toolbar}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={btnSendState.disabled}
                    >
                        {btnSendState.label}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleGoBack}
                    >
                        Voltar
                    </Button>
                </Toolbar>

            </form>
        </>
    )
}