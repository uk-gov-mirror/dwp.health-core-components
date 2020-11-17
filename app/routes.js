const express = require('express')
const router = express.Router()
 
// statement Navigation
 
// router.post("/wca_v1/TakingStatementsentry-post", function(req, res, next){
 
//  if(req.body['comment'] === 'add-statement'){
//  res.redirect('/wca_v1/condition_history_saved');
//  } else {
//  res.redirect('/wca_v1/TakingStatementsentry');
//  }
//  next();
// });
 


router.post("/corecomponents/Research/3Navigation/WCA-tasklist/Typical_day-post", function(req, res, next){
 
    if(req.body['statement'] === 'statement2'){
    res.redirect('/corecomponents/Research/3Navigation/WCA-tasklist/TaskList');
    } else {
    res.redirect('/corecomponents/Research/3Navigation/WCA-tasklist/Typical_day');
    }
    next();
   });




// task list
 
router.get('/wca/task-list', function (req, res) {
 res.render('corecomponents/Research/3Navigation/WCA-tasklist/TaskList.html', { session: req.session.data })
})
 

router.get('/wca/attendee', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/additionalAttendee.html', { session: req.session.data });
   });
    
   router.post('/wca/attendee/save-and-continue', function (req, res) {
    if (req.body['attendee']) {
    req.session.data['attendee'] = req.body['attendee']
    }
    res.redirect('/wca/task-list');
   });


router.get('/wca/condition-history', function (req, res) {
 res.render('corecomponents/Research/3Navigation/WCA-tasklist/Conditionhistory.html', { session: req.session.data });
});
 
router.post('/wca/condition-history/save-and-continue', function (req, res) {
 if (req.body['condition-history']) {
 req.session.data['condition-history'] = req.body['condition-history']
 }
 res.redirect('/wca/task-list');
});
 

router.get('/wca/social-work', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/SocialWorkHistory.html', { session: req.session.data });
   });
    
   router.post('/wca/social-work/save-and-continue', function (req, res) {
    if (req.body['social-work']) {
    req.session.data['social-work'] = req.body['social-work']
    }
    res.redirect('/wca/task-list');
   });
    

   router.get('/wca/statement', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/Typical_day.html', { session: req.session.data });
   });
    
   router.post('/wca/statement/save-and-continue', function (req, res) {
    if (req.body['statement']) {
    req.session.data['statement'] = req.body['statement']
    }
    res.redirect('/wca/task-list');
   });


   router.get('/wca/medication', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/medication.html', { session: req.session.data });
   });
    
   router.post('/wca/medication/save-and-continue', function (req, res) {
    if (req.body['medication']) {
    req.session.data['medication'] = req.body['medication']
    }
    res.redirect('/wca/task-list');
   });


   


   router.get('/wca/observestatement', function (req, res) {
      res.render('corecomponents/Research/3Navigation/WCA-tasklist/informal-observation.html', { session: req.session.data });
     });
      
     router.post('/wca/observestatement/save-and-continue', function (req, res) {
      if (req.body['observestatement']) {
      req.session.data['observestatement'] = req.body['observestatement']
      }
      res.redirect('/wca/task-list');
     });




   router.get('/wca/cardio', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/PA/breathlessness.html', { session: req.session.data });
   });
    
   router.post('/wca/cardio/save-and-continue', function (req, res) {
    if (req.body['cardio']) {
    req.session.data['cardio'] = req.body['cardio']
    }
    res.redirect('/wca/task-list');
   });


   router.get('/wca/general-health', function (req, res) {
    res.render('corecomponents/Research/3Navigation/WCA-tasklist/PA/GeneralHealth.html', { session: req.session.data });
   });
    
   router.post('/wca/general-health/save-and-continue', function (req, res) {
    if (req.body['general-health']) {
    req.session.data['general-health'] = req.body['general-health']
    }
    res.redirect('/wca/task-list');
   });
   





// PIP Tasklist

   router.get('/pip/task-list', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/0-TaskList.html', { session: req.session.data })
   })
    
   router.get('/pip/evidence-considered', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/1-Consultation-start.html', { session: req.session.data });
   });
    
   router.post('/pip/evidence-considered/save-and-continue', function (req, res) {
    if (req.body['evidence-considered']) {
    req.session.data['evidence-considered'] = req.body['evidence-considered']
    }
    res.redirect('/pip/task-list');
   });



   router.get('/pip/add-attendee', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/1a-AddAttendee', { session: req.session.data });
   });
    
   router.post('/pip/add-attendee/save-and-continue', function (req, res) {
    if (req.body['add-attendee']) {
    req.session.data['add-attendee'] = req.body['add-attendee']
    }
    res.redirect('/pip/task-list');
   });


   router.get('/pip/history-condition', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/2-History-of-conditions', { session: req.session.data });
   });
    
   router.post('/pip/history-condition/save-and-continue', function (req, res) {
    if (req.body['history-condition']) {
    req.session.data['history-condition'] = req.body['history-condition']
    }
    res.redirect('/pip/task-list');
   });

  
   router.get('/pip/medication-name', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/3-Current-medication', { session: req.session.data });
   });
    
   router.post('/pip/medication-name/save-and-continue', function (req, res) {
    if (req.body['medication-name']) {
    req.session.data['medication-name'] = req.body['medication-name']
    }
    res.redirect('/pip/task-list');
   });



   router.get('/pip/social-history', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/4-Social-and-occ-history.html', { session: req.session.data });
   });
    
   router.post('/pip/social-history/save-and-continue', function (req, res) {
    if (req.body['social-history']) {
    req.session.data['social-history'] = req.body['social-history']
    }
    res.redirect('/pip/task-list');
   });


   router.get('/pip/variability', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/5-Functional-history.html', { session: req.session.data });
   });
    
   router.post('/pip/variability/save-and-continue', function (req, res) {
    if (req.body['pip/variability']) {
    req.session.data['pip/variability'] = req.body['pip/variability']
    }
    res.redirect('/pip/task-list');
   });

   router.get('/pip/observations', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/6-Observations.html', { session: req.session.data });
   });
    
   router.post('/pip/observations/save-and-continue', function (req, res) {
    if (req.body['pip/observations']) {
    req.session.data['pip/observations'] = req.body['pip/observations']
    }
    res.redirect('/pip/task-list');
   });
   

   router.get('/pip/mental-state', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/7-Mental-state.html', { session: req.session.data });
   });
    
   router.post('/pip/mental-state/save-and-continue', function (req, res) {
    if (req.body['pip/mental-state']) {
    req.session.data['pip/mental-state'] = req.body['pip/mental-state']
    }
    res.redirect('/pip/task-list');
   });


   router.get('/pip/musculoskeletal', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/8-Musculoskeletal', { session: req.session.data });
   });
    
   router.post('/pip/musculoskeletal/save-and-continue', function (req, res) {
    if (req.body['pip/musculoskeletal']) {
    req.session.data['pip/musculoskeletal'] = req.body['pip/musculoskeletal']
    }
    res.redirect('/pip/task-list');
   });


   router.get('/pip/other-systems', function (req, res) {
    res.render('corecomponents/Research/3Navigation/pip-tasklist/9-Other-systems', { session: req.session.data });
   });
    
   router.post('/pip/other-systems/save-and-continue', function (req, res) {
    if (req.body['pip/other-systems']) {
    req.session.data['pip/other-systems'] = req.body['pip/other-systems']
    }
    res.redirect('/pip/task-list');
   });






// left nav WCA
 
  router.get('/wca/leftnav/left-condition-history', function (req, res) {

   res.render('corecomponents/Research/3Navigation/WCA-Leftnav/condition_history.html', { 
      session: req.session.data,
      request: req
   });
  });
   
  router.post('/wca/leftnav/left-condition-history/save-and-continue', function (req, res) {
   if (req.body['left-condition-history']) {
   req.session.data['left-condition-history'] = req.body['left-condition-history']
   }
   res.redirect('/wca/leftnav/left-medication');
  });
   


  router.get('/wca/leftnav/left-medication', function (req, res) {
   res.render('corecomponents/Research/3Navigation/WCA-Leftnav/medication.html', { 
   session: req.session.data,
   request: req
});
});

  router.post('/wca/leftnav/left-medication/save-and-continue', function (req, res) {
   if (req.body['left-medication']) {
   req.session.data['left-medication'] = req.body['left-medication']
   }
   res.redirect('/wca/leftnav/left-social');
  });



  router.get('/wca/leftnav/left-social', function (req, res) {
   res.render('corecomponents/Research/3Navigation/WCA-Leftnav/social.html', { 
      session: req.session.data,
      request: req
   });
   });

  router.post('/wca/leftnav/left-social/save-and-continue', function (req, res) {
   if (req.body['left-social']) {
   req.session.data['left-social'] = req.body['left-social']
   }
   res.redirect('/wca/leftnav/leftTypstatement');
  });



  router.get('/wca/leftnav/leftTypstatement', function (req, res) {
   res.render('corecomponents/Research/3Navigation/WCA-Leftnav/typical-day.html', { 
      session: req.session.data,
      request: req
   });
   });

  router.post('/wca/leftnav/leftTypstatement/save-and-continue', function (req, res) {
   if (req.body['leftTypstatement']) {
   req.session.data['leftTypstatement'] = req.body['leftTypstatement']
   }
   res.redirect('/wca/leftnav/leftobvstatement');
  });


  
  router.get('/wca/leftnav/leftobvstatement', function (req, res) {
   res.render('corecomponents/Research/3Navigation/WCA-Leftnav/informal-observations.html', { 
      session: req.session.data,
      request: req
   });
   });
  

  router.post('/wca/leftnav//leftobvstatement/save-and-continue', function (req, res) {
   if (req.body['/leftobvstatement']) {
   req.session.data['/leftTypstatement'] = req.body['/leftobvstatement']
   }
   res.redirect('/wca/leftnav/PA');
  });

 

  // left nav PIP
 
  router.get('/pip/leftnav/left-start', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/1-Consultation-start.html', { 
      session: req.session.data,
      request: req
   });
   });
  
   
  router.post('/pip/leftnav/left-start/save-and-continue', function (req, res) {
   if (req.body['left-start']) {
   req.session.data['left-start'] = req.body['left-start']
   }
   res.redirect('/pip/leftnav/pip-left-attendee');
  });



  router.get('/pip/leftnav/pip-left-attendee', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/1a-AddAttendee.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-attendee/save-and-continue', function (req, res) {
   if (req.body['pip-left-attendee']) {
   req.session.data['pip-left-attendee'] = req.body['pip-left-attendee']
   }
   res.redirect('/pip/leftnav/pip-left-condition');
  });



  router.get('/pip/leftnav/pip-left-condition', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/2-History-of-conditions.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-condition/save-and-continue', function (req, res) {
   if (req.body['pip-left-condition']) {
   req.session.data['pip-left-condition'] = req.body['pip-left-condition']
   }
   res.redirect('/pip/leftnav/pip-left-medication');
  });



  router.get('/pip/leftnav/pip-left-medication', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/3-Current-medication.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-medication/save-and-continue', function (req, res) {
   if (req.body['pip-left-medication']) {
   req.session.data['pip-left-medication'] = req.body['pip-left-medication']
   }
   res.redirect('/pip/leftnav/pip-left-social-history');
  });



  router.get('/pip/leftnav/pip-left-social-history', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/4-Social-and-occ-history.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-social-history/save-and-continue', function (req, res) {
   if (req.body['pip-left-social-history']) {
   req.session.data['pip-left-social-history'] = req.body['pip-left-social-history']
   }
   res.redirect('/pip/leftnav/pip-left-variability');
  });



  router.get('/pip/leftnav/pip-left-variability', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/5-Functional-history.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-variability/save-and-continue', function (req, res) {
   if (req.body['pip-left-variability']) {
   req.session.data['pip-left-variability'] = req.body['pip-left-variability']
   }
   res.redirect('/pip/leftnav/pip-left-observations');
  });


  router.get('/pip/leftnav/pip-left-observations', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/6-Observations.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-observations/save-and-continue', function (req, res) {
   if (req.body['pip-left-observations']) {
   req.session.data['pip-left-observations'] = req.body['pip-left-observations']
   }
   res.redirect('/pip/leftnav/pip-mental-state');
  });



  router.get('/pip/leftnav/pip-mental-state', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/6a-Consent.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-mental-state/save-and-continue', function (req, res) {
   if (req.body['pip-mental-state']) {
   req.session.data['pip-mental-state'] = req.body['pip-mental-state']
   }
   res.redirect('/pip/leftnav/pip-left-musculoskeletal');
  });


  router.get('/pip/leftnav/pip-left-musculoskeletal', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/8-Musculoskeletal.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-musculoskeletal/save-and-continue', function (req, res) {
   if (req.body['pip-left-musculoskeletal']) {
   req.session.data['pip-left-musculoskeletal'] = req.body['pip-left-musculoskeletal']
   }
   res.redirect('/pip/leftnav/pip-left-other-systems');
  });



  router.get('/pip/leftnav/pip-left-other-systems', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/9-Other-systems.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-other-systems/save-and-continue', function (req, res) {
   if (req.body['pip-left-other-systems']) {
   req.session.data['pip-left-other-systems'] = req.body['pip-left-other-systems']
   }
   res.redirect('/pip/leftnav/pip-left-submit');
  });


  router.get('/pip/leftnav/pip-left-submit', function (req, res) {
   res.render('corecomponents/Research/3Navigation/pip-leftnav/10-Submit.html', { 
      session: req.session.data,
      request: req
   });
   });
   
  router.post('/pip/leftnav/pip-left-submit/save-and-continue', function (req, res) {
   if (req.body['pip-left-submit']) {
   req.session.data['pip-left-submit'] = req.body['pip-left-submit']
   }
   res.redirect('pip-left-submit');
  });



module.exports = router