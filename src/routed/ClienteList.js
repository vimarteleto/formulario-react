import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import axios from 'axios'
import ConfirmDialog from '../ui/ConfirmDialog'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  dataGrid: {
    '& .MuiDataGrid-row button': {       // Esconde os botões na linha de tabela "normal"
      visibility: 'hidden'
    },
    '& .MuiDataGrid-row:hover button': { // Exibe os botões de volta quando o mouse passar por cima
      visibility: 'visible'
    }
  },
  toolbar: {
    justifyContent: 'space-between',
    paddingRight: 0,
    margin: theme.spacing(2, 0)
  }
}))

export default function ClienteList() {
  const classes = useStyles()

  // Variáveis que conterão dados PRECISAM ser inicializadas como vetores vazios
  const [clientes, setClientes] = useState([])
  const [deletable, setDeletable] = useState()        // Código do registro a ser excluído
  const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação está aberto?
  const [sbOpen, setSbOpen] = useState(false)
  const [sbSeverity, setSbSeverity] = useState('success')
  const [sbMessage, setSbMessage] = useState('Exclusão realizada com sucesso.')
  
  const history = useHistory()

  useEffect(() => {
    getData()
  }, []) 
  // Quando a lista de dependências é um vetor vazio, o useEffect()
  // é executado apenas uma vez, no carregamento inicial do componente

  async function getData() {
    try { // tenta buscar os dados
      let response = await axios.get('https://api.faustocintra.com.br/clientes')
      if(response.data.length > 0) setClientes(response.data)
    }
    catch(error) {
      console.error(error)
    }
  }

  async function deleteItem() {
    try {
      await axios.delete(`https://api.faustocintra.com.br/clientes/${deletable}`)
      getData()
      setSbSeverity('success')
      setSbMessage('Exclusão efetuada com sucesso.')
    }
    catch(error) {
      setSbSeverity('error')
      setSbMessage('ERRO: ' + error.message)
    }
    setSbOpen(true)   // Exibe a snackbar
  }

  function handleDialogClose(result) {
    setDialogOpen(false)

    // Se o usuário concordou com a exclusão 
    if(result) deleteItem()
  }

  function handleDelete(id) {
    setDeletable(id)
    setDialogOpen(true)
  }

  function handleSbClose() {
    setSbOpen(false)    // Fecha a snackbar
  }

  const columns = [
    { 
      field: 'id', 
      headerName: 'Cód.',
      align: 'right',
      headerAlign: 'right',  
      flex: true
    },
    { 
      field: 'nome', 
      headerName: 'Nome',
      flex: true 
    },
    { 
      field: 'cpf', 
      headerName: 'CPF',
      align: 'center',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'rg', 
      headerName: 'RG',
      align: 'center',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'logradouro', 
      headerName: 'Logradouro',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'num_imovel', 
      headerName: 'Número',
      align: 'center',
      headerAlign: 'center', 
      flex: true
    },
    { 
      field: 'complemento', 
      headerName: 'Complemento',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'bairro', 
      headerName: 'Bairro',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'municipio', 
      headerName: 'Município',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'uf', 
      headerName: 'UF',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'telefone', 
      headerName: 'Telefone',
      align: 'left',
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'email', 
      headerName: 'Email',
      align: 'left',
      headerAlign: 'center', 
      flex: false
    },
    { 
      field: 'editar',
      headerName: 'Editar',
      align: 'center', 
      headerAlign: 'center', 
      flex: true,
      renderCell: params => (
        <IconButton aria-label="editar">
          <EditIcon color="primary"/>
        </IconButton>
      )
    },
    { 
      field: 'excluir',
      headerName: 'Excluir',
      align: 'center', 
      headerAlign: 'center', 
      flex: true,
      renderCell: params => (
        <IconButton aria-label="excluir" onClick={() => handleDelete(params.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      )
    },
  ];

  return (
    <>
      <ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose}>
        Deseja realmente excluir este registro?
      </ConfirmDialog>
      
      <Snackbar open={sbOpen} autoHideDuration={6000} onClose={handleSbClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSbClose} severity={sbSeverity}>
          {sbMessage}
        </MuiAlert>
      </Snackbar>
      
      <Toolbar className={classes.toolbar}>
      <h1>Listagem de clientes</h1>
        <Button color="primary" variant="contained" size="large" 
          startIcon={<AddIcon />} onClick={() => history.push('/new')}>
          Novo Cadastro
        </Button>
      </Toolbar>
      <Paper elevation={4}>
        <DataGrid 
          className={classes.dataGrid} 
          rows={clientes} 
          columns={columns} 
          pageSize={10} 
          autoHeight={true} 
          disableSelectionOnClick={true} 
        />
      </Paper>
    </>
  )
}