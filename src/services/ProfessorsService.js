import { HttpService } from './HttpService'

class ProfessorsService extends HttpService {

  addProfessor(professor){
    return this.axios.post('professors/create', professor)
  }

  getProfessors(professor){
    return this.axios.get('professors', professor)
  }
}

export const professorsService = new ProfessorsService()