import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'

// classes de estilo
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

// classes de entrada para a máscara do campo cpf e telefone
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

    const history = useHistory()

    function handleInputChange(event, property) {
    
        // Se houver id no event.target, ele será o nome da propriedade
        // senão, usaremos o valor do segundo parâmetro
        if(event.target.id) property = event.target.id
    
        if(property === 'rg' || property === 'num_imovel') {
          setCliente({...cliente, [property]: event.target.value.toUpperCase()}) 
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
            // property === 'complemento' ||
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
             // Quando o nome de uma propriedade de um objeto aparece entre [],
             // isso se chama "propriedade calculada". O nome da propriedade vai
             // corresponder à avaliação da expressão entre os colchetes
          setCliente({...cliente, [property]: event.target.value})
        }
    }

    async function saveData() {
        try {
            await axios.post('https://api.faustocintra.com.br/clientes', cliente)
            alert('Dados salvos com sucesso!')
        }
        catch(error) {
            alert('ERRO: ' + error.message)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        saveData()
    }

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <h1>Novo cadastro</h1>
            </Toolbar>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField id="nome" label="Nome" required
                variant="filled" value={cliente.nome} onChange={handleInputChange} fullWidth />

                <InputMask id="cpf" formatChars={formatChars} mask={cpfMask} value={cliente.cpf} onChange={event => handleInputChange(event, 'cpf')} >
                {() => <TextField label="CPF" variant="filled" fullWidth required />}
                </InputMask>

                <TextField id="rg" label="RG" type="text" maxLength={20} required
                variant="filled" value={cliente.rg} onChange={handleInputChange} fullWidth />
                <TextField id="logradouro" label="Logradouro" required
                variant="filled" value={cliente.logradouro} onChange={handleInputChange} fullWidth />
                <TextField id="num_imovel" label="Número" required
                variant="filled" value={cliente.num_imovel} onChange={handleInputChange} fullWidth />
                <TextField id="complemento" label="Complemento" 
                variant="filled" value={cliente.complemento} onChange={handleInputChange} fullWidth />
                <TextField id="bairro" label="Bairro" required
                variant="filled" value={cliente.bairro} onChange={handleInputChange} fullWidth />
                <TextField id="municipio" label="Município" required
                variant="filled" value={cliente.municipio} onChange={handleInputChange} fullWidth />
                

                <TextField id="uf" label="UF" required
                variant="filled" value={cliente.uf} onChange={event => handleInputChange(event, 'uf')} select fullWidth >
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

                <InputMask id="telefone" formatChars={formatChars} mask={telMask} value={cliente.telefone} onChange={event => handleInputChange(event, 'telefone')} >
                {() => <TextField label="Telefone" variant="filled" fullWidth required />}
                </InputMask>

                <TextField id="email" label="Email" type="email" required
                variant="filled" value={cliente.email} onChange={handleInputChange} fullWidth />


                <Toolbar className={classes.toolbar}>
                    <Button variant="contained" color="primary" type="submit">Enviar</Button>
                    <Button variant="outlined" onClick={() => history.push('/list')}>Voltar</Button>                    
                </Toolbar>

            </form>
            {/* <div>{JSON.stringify(cliente)}
                <br />
            </div> */}
        </>
    )
}