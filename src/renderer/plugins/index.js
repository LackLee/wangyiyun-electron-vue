import { createGlobalModal } from '@/utils/comm';

import dragModal from './dragModal';


export default {
    install(Vue, pluginOptions = {}) {
        let $modal = {
            dragModal: createGlobalModal(Vue, dragModal),
        }
        Vue.prototype.$modal = $modal
    }

}
