import * as server from '../../OLServer/dist/index.js';
import sinon from '../node_modules/sinon/pkg/sinon-esm.js';
global.it('server runs with mocks',function(){
server.server.get({url: '/',pipe: sinon.fake(),read: sinon.fake(),on: sinon.fake()},{write: sinon.fake()});

})