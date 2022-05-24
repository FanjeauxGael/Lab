module.exports = {

    
    friendlyName: 'notready',
  
  
    description: 'notready page',
  
  
    exits: {
  
      success: {
        statusCode: 200,
        description: 'notready page',
        viewTemplatePath: 'pages/notready'
      },
  
      redirect: {
        responseType: 'redirect',
        description: 'notready page'
      },
  
    },
  
  
    fn: async function () {
  
      if (this.req.me) {
        throw {redirect:'/welcome'};
      }
      this.res.locals.layout = false;
      return {};
  
    }
  
  
  };
  