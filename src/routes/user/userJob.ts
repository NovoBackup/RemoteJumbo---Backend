import { Router } from 'express'
import { getDocCounts } from '../../controller/getDocCounts'
import { addViewCount } from '../../controller/user/addViewCount'
import { getJobs } from '../../controller/user/getJobs'
import { getRandomJobs } from '../../controller/user/getRandomJobs'
import { getSingleJob } from '../../controller/user/getSingleJob'
import { searchJob } from '../../controller/user/searchJob'
import { starJob } from '../../controller/user/star'

const router = Router()

router
  .get('/all', getJobs)
  .get('/star')
  .get('/total-jobs', getDocCounts)
  .get('/search', searchJob)
  .get('/random/:id', getRandomJobs)
  .post('/star/:id', starJob)
  .get('/:id', getSingleJob)
  .patch('/:id', addViewCount)

export default router
