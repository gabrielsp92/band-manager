import faker from 'faker/locale/pt_BR'

export default (ctx, inject) => inject('faker', faker)
