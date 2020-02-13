using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/login")]
    public class LoginController : ApiController
    {
        ATMDBEntities DB = new ATMDBEntities();
        [Route("InsertEmployee")]
        [HttpPost]
        public object InsertEmployee(Register Reg)
        {
            try
            {

                    customer EL = new customer();
                    EL.cname = Reg.cname;
                    EL.cardno = Reg.cardno;
                    EL.pin = Reg.pin;
                    EL.amt = 1000;
                    DB.customers.Add(EL);
                    DB.SaveChanges();
                    return new Response
                    { status = "Success", Message = "Record SuccessFully Saved." };
                
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { status = "Error", Message = "Invalid Data." };
        }
        [Route("Login")]
        [HttpPost]
        public Response employeeLogin(Login login)
        {
            var log = DB.customers.Where(x => x.cardno.Equals(login.cardno) && x.pin.Equals(login.pin)).FirstOrDefault();

            if (log == null)
            {
                return new Response { status = "Invalid", Message = "Invalid User." };
            }
            else
                return new Response { status = "Success", Message = "Login Successfully" };
        }
    }
}

