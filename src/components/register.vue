<template>
  <div class="register-wrap">
    <h1 class="registerflag">Register</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <label for="username" class="control-label">Username：
            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="username">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="email" class="control-label">Email
            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="email">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="password" class="control-label">Password
            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="password">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="password2" class="control-label">Confirm Password
            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="password2">
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <label for="password2" class="control-label">Desired PIN ：
            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="password2">
        </div>
        <div class="col-md-2">
          <label for="password2" class="control-label">Birth Year ：

            <label style="color:red">*</label>
          </label>
          <input class="form-control" id="password2">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label for="password2" class="control-label">Referrer ：

          </label>
          <input class="form-control control-label-referrer" id="password2">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <label> Verification:</label>
          <label style="color:red">*</label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Click or touch the Clock
        </div>
      </div>
      <!--icon-->
      <div class="row">
        <div class="col-md-4">
          <div class="img">
            <a href="javascript:void(0);"><img src="https://colossalscope.com/Plugins/VisualCaptcha/Handler.ashx/image/0?namespace=0a6ac126e2a08fa88beeebcc19d1e879&amp;r=u8m5tkpo2nn"
                id="visualCaptcha-img-0" data-index="0" alt="" title=""></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Detected country:
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          China
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div style="display:flex">
            <input id="TermsCheckBox" type="checkbox" name="">
            <div> I have read and accepted Terms of Service *</div>
          </div>
          <div style="display:flex">
            <input id="TermsCheckBox" type="checkbox" name="">
            <div> I have read and accepted Privacy Notice *</div>
          </div>
          <div style="display:flex">
            <input id="TermsCheckBox" type="checkbox" name="">
            <div>I want to receive marketing communication</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="register-buttons m-t-30">
            <input type="submit" name="register" value="Register" class="btn btn-primary btn-block btn-lg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {}
  },
}
</script>
<style scoped lang="less">
.register-wrap {
  width: 100%;
  margin-top: 8rem;
  box-sizing: border-box;
  .registerflag {
    width: 100%;
    text-align: center;
    font-size: 2.2rem;
  }
  .container {
    .row {
      justify-content: center;
      .col-md-4 {
        .form-control {
          border: 1px solid #ccc;
          color: #343a40 !important;
          border-radius: 5px;
          display: block;
          width: 100%;
          height: 2rem;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .control-label {
          font-size: 0.875rem;
          padding: 5px 0px;
          color: #65686b;
        }
        .control-label-referrer {
          background-color: #ccc;
        }
        .register-buttons {
          .btn-primary {
            background-color: #ff6f00;
            border: none;
            margin-top: 2rem;
            margin-bottom: 10rem;
          }
        }
      }
      .col-md-2 {
        .control-label {
          font-size: 0.875rem;
          padding: 5px 0px;
          color: #65686b;
        }
      }
    }
  }
}
</style>

