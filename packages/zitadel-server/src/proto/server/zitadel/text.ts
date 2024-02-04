/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ObjectDetails } from "./object";

export const protobufPackage = "zitadel.text.v1";

export interface MessageCustomText {
  details: ObjectDetails | undefined;
  title: string;
  preHeader: string;
  subject: string;
  greeting: string;
  text: string;
  buttonText: string;
  footerText: string;
  isDefault: boolean;
}

export interface LoginCustomText {
  details: ObjectDetails | undefined;
  selectAccountText: SelectAccountScreenText | undefined;
  loginText: LoginScreenText | undefined;
  passwordText: PasswordScreenText | undefined;
  usernameChangeText: UsernameChangeScreenText | undefined;
  usernameChangeDoneText: UsernameChangeDoneScreenText | undefined;
  initPasswordText: InitPasswordScreenText | undefined;
  initPasswordDoneText: InitPasswordDoneScreenText | undefined;
  emailVerificationText: EmailVerificationScreenText | undefined;
  emailVerificationDoneText: EmailVerificationDoneScreenText | undefined;
  initializeUserText: InitializeUserScreenText | undefined;
  initializeDoneText: InitializeUserDoneScreenText | undefined;
  initMfaPromptText: InitMFAPromptScreenText | undefined;
  initMfaOtpText: InitMFAOTPScreenText | undefined;
  initMfaU2fText: InitMFAU2FScreenText | undefined;
  initMfaDoneText: InitMFADoneScreenText | undefined;
  mfaProvidersText: MFAProvidersText | undefined;
  verifyMfaOtpText: VerifyMFAOTPScreenText | undefined;
  verifyMfaU2fText: VerifyMFAU2FScreenText | undefined;
  passwordlessText: PasswordlessScreenText | undefined;
  passwordChangeText: PasswordChangeScreenText | undefined;
  passwordChangeDoneText: PasswordChangeDoneScreenText | undefined;
  passwordResetDoneText: PasswordResetDoneScreenText | undefined;
  registrationOptionText: RegistrationOptionScreenText | undefined;
  registrationUserText: RegistrationUserScreenText | undefined;
  registrationOrgText: RegistrationOrgScreenText | undefined;
  linkingUserDoneText: LinkingUserDoneScreenText | undefined;
  externalUserNotFoundText: ExternalUserNotFoundScreenText | undefined;
  successLoginText: SuccessLoginScreenText | undefined;
  logoutText: LogoutDoneScreenText | undefined;
  footerText: FooterText | undefined;
  passwordlessPromptText: PasswordlessPromptScreenText | undefined;
  passwordlessRegistrationText: PasswordlessRegistrationScreenText | undefined;
  passwordlessRegistrationDoneText: PasswordlessRegistrationDoneScreenText | undefined;
  externalRegistrationUserOverviewText: ExternalRegistrationUserOverviewScreenText | undefined;
  isDefault: boolean;
}

export interface SelectAccountScreenText {
  title: string;
  description: string;
  titleLinkingProcess: string;
  descriptionLinkingProcess: string;
  otherUser: string;
  sessionStateActive: string;
  sessionStateInactive: string;
  userMustBeMemberOfOrg: string;
}

export interface LoginScreenText {
  title: string;
  description: string;
  titleLinkingProcess: string;
  descriptionLinkingProcess: string;
  userMustBeMemberOfOrg: string;
  loginNameLabel: string;
  registerButtonText: string;
  nextButtonText: string;
  externalUserDescription: string;
  userNamePlaceholder: string;
  loginNamePlaceholder: string;
}

export interface PasswordScreenText {
  title: string;
  description: string;
  passwordLabel: string;
  resetLinkText: string;
  backButtonText: string;
  nextButtonText: string;
  minLength: string;
  hasUppercase: string;
  hasLowercase: string;
  hasNumber: string;
  hasSymbol: string;
  confirmation: string;
}

export interface UsernameChangeScreenText {
  title: string;
  description: string;
  usernameLabel: string;
  cancelButtonText: string;
  nextButtonText: string;
}

export interface UsernameChangeDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
}

export interface InitPasswordScreenText {
  title: string;
  description: string;
  codeLabel: string;
  newPasswordLabel: string;
  newPasswordConfirmLabel: string;
  nextButtonText: string;
  resendButtonText: string;
}

export interface InitPasswordDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
  cancelButtonText: string;
}

export interface EmailVerificationScreenText {
  title: string;
  description: string;
  codeLabel: string;
  nextButtonText: string;
  resendButtonText: string;
}

export interface EmailVerificationDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
  cancelButtonText: string;
  loginButtonText: string;
}

export interface InitializeUserScreenText {
  title: string;
  description: string;
  codeLabel: string;
  newPasswordLabel: string;
  newPasswordConfirmLabel: string;
  resendButtonText: string;
  nextButtonText: string;
}

export interface InitializeUserDoneScreenText {
  title: string;
  description: string;
  cancelButtonText: string;
  nextButtonText: string;
}

export interface InitMFAPromptScreenText {
  title: string;
  description: string;
  otpOption: string;
  u2fOption: string;
  skipButtonText: string;
  nextButtonText: string;
}

export interface InitMFAOTPScreenText {
  title: string;
  description: string;
  descriptionOtp: string;
  secretLabel: string;
  codeLabel: string;
  nextButtonText: string;
  cancelButtonText: string;
}

export interface InitMFAU2FScreenText {
  title: string;
  description: string;
  tokenNameLabel: string;
  notSupported: string;
  registerTokenButtonText: string;
  errorRetry: string;
}

export interface InitMFADoneScreenText {
  title: string;
  description: string;
  cancelButtonText: string;
  nextButtonText: string;
}

export interface MFAProvidersText {
  chooseOther: string;
  otp: string;
  u2f: string;
}

export interface VerifyMFAOTPScreenText {
  title: string;
  description: string;
  codeLabel: string;
  nextButtonText: string;
}

export interface VerifyMFAU2FScreenText {
  title: string;
  description: string;
  validateTokenText: string;
  notSupported: string;
  errorRetry: string;
}

export interface PasswordlessScreenText {
  title: string;
  description: string;
  loginWithPwButtonText: string;
  validateTokenButtonText: string;
  notSupported: string;
  errorRetry: string;
}

export interface PasswordChangeScreenText {
  title: string;
  description: string;
  oldPasswordLabel: string;
  newPasswordLabel: string;
  newPasswordConfirmLabel: string;
  cancelButtonText: string;
  nextButtonText: string;
}

export interface PasswordChangeDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
}

export interface PasswordResetDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
}

export interface RegistrationOptionScreenText {
  title: string;
  description: string;
  userNameButtonText: string;
  externalLoginDescription: string;
  loginButtonText: string;
}

export interface RegistrationUserScreenText {
  title: string;
  description: string;
  descriptionOrgRegister: string;
  firstnameLabel: string;
  lastnameLabel: string;
  emailLabel: string;
  usernameLabel: string;
  languageLabel: string;
  genderLabel: string;
  passwordLabel: string;
  passwordConfirmLabel: string;
  tosAndPrivacyLabel: string;
  tosConfirm: string;
  tosLinkText: string;
  privacyConfirm: string;
  privacyLinkText: string;
  nextButtonText: string;
  backButtonText: string;
}

export interface ExternalRegistrationUserOverviewScreenText {
  title: string;
  description: string;
  emailLabel: string;
  usernameLabel: string;
  firstnameLabel: string;
  lastnameLabel: string;
  nicknameLabel: string;
  languageLabel: string;
  phoneLabel: string;
  tosAndPrivacyLabel: string;
  tosConfirm: string;
  tosLinkText: string;
  privacyLinkText: string;
  backButtonText: string;
  nextButtonText: string;
  privacyConfirm: string;
}

export interface RegistrationOrgScreenText {
  title: string;
  description: string;
  orgnameLabel: string;
  firstnameLabel: string;
  lastnameLabel: string;
  usernameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  passwordConfirmLabel: string;
  tosAndPrivacyLabel: string;
  tosConfirm: string;
  tosLinkText: string;
  privacyConfirm: string;
  privacyLinkText: string;
  saveButtonText: string;
}

export interface LinkingUserDoneScreenText {
  title: string;
  description: string;
  cancelButtonText: string;
  nextButtonText: string;
}

export interface ExternalUserNotFoundScreenText {
  title: string;
  description: string;
  linkButtonText: string;
  autoRegisterButtonText: string;
  tosAndPrivacyLabel: string;
  tosConfirm: string;
  tosLinkText: string;
  privacyLinkText: string;
  privacyConfirm: string;
}

export interface SuccessLoginScreenText {
  title: string;
  /** Text to describe that auto-redirect should happen after successful login */
  autoRedirectDescription: string;
  /** Text to describe that the window can be closed after redirect */
  redirectedDescription: string;
  nextButtonText: string;
}

export interface LogoutDoneScreenText {
  title: string;
  description: string;
  loginButtonText: string;
}

export interface FooterText {
  tos: string;
  privacyPolicy: string;
  help: string;
  supportEmail: string;
}

export interface PasswordlessPromptScreenText {
  title: string;
  description: string;
  descriptionInit: string;
  passwordlessButtonText: string;
  nextButtonText: string;
  skipButtonText: string;
}

export interface PasswordlessRegistrationScreenText {
  title: string;
  description: string;
  tokenNameLabel: string;
  notSupported: string;
  registerTokenButtonText: string;
  errorRetry: string;
}

export interface PasswordlessRegistrationDoneScreenText {
  title: string;
  description: string;
  nextButtonText: string;
  cancelButtonText: string;
  descriptionClose: string;
}

function createBaseMessageCustomText(): MessageCustomText {
  return {
    details: undefined,
    title: "",
    preHeader: "",
    subject: "",
    greeting: "",
    text: "",
    buttonText: "",
    footerText: "",
    isDefault: false,
  };
}

export const MessageCustomText = {
  encode(message: MessageCustomText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.preHeader !== "") {
      writer.uint32(26).string(message.preHeader);
    }
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    if (message.greeting !== "") {
      writer.uint32(42).string(message.greeting);
    }
    if (message.text !== "") {
      writer.uint32(50).string(message.text);
    }
    if (message.buttonText !== "") {
      writer.uint32(58).string(message.buttonText);
    }
    if (message.footerText !== "") {
      writer.uint32(66).string(message.footerText);
    }
    if (message.isDefault === true) {
      writer.uint32(72).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageCustomText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageCustomText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.preHeader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.greeting = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.text = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.buttonText = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.footerText = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MessageCustomText>): MessageCustomText {
    return MessageCustomText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MessageCustomText>): MessageCustomText {
    const message = createBaseMessageCustomText();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.title = object.title ?? "";
    message.preHeader = object.preHeader ?? "";
    message.subject = object.subject ?? "";
    message.greeting = object.greeting ?? "";
    message.text = object.text ?? "";
    message.buttonText = object.buttonText ?? "";
    message.footerText = object.footerText ?? "";
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseLoginCustomText(): LoginCustomText {
  return {
    details: undefined,
    selectAccountText: undefined,
    loginText: undefined,
    passwordText: undefined,
    usernameChangeText: undefined,
    usernameChangeDoneText: undefined,
    initPasswordText: undefined,
    initPasswordDoneText: undefined,
    emailVerificationText: undefined,
    emailVerificationDoneText: undefined,
    initializeUserText: undefined,
    initializeDoneText: undefined,
    initMfaPromptText: undefined,
    initMfaOtpText: undefined,
    initMfaU2fText: undefined,
    initMfaDoneText: undefined,
    mfaProvidersText: undefined,
    verifyMfaOtpText: undefined,
    verifyMfaU2fText: undefined,
    passwordlessText: undefined,
    passwordChangeText: undefined,
    passwordChangeDoneText: undefined,
    passwordResetDoneText: undefined,
    registrationOptionText: undefined,
    registrationUserText: undefined,
    registrationOrgText: undefined,
    linkingUserDoneText: undefined,
    externalUserNotFoundText: undefined,
    successLoginText: undefined,
    logoutText: undefined,
    footerText: undefined,
    passwordlessPromptText: undefined,
    passwordlessRegistrationText: undefined,
    passwordlessRegistrationDoneText: undefined,
    externalRegistrationUserOverviewText: undefined,
    isDefault: false,
  };
}

export const LoginCustomText = {
  encode(message: LoginCustomText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectAccountText !== undefined) {
      SelectAccountScreenText.encode(message.selectAccountText, writer.uint32(18).fork()).ldelim();
    }
    if (message.loginText !== undefined) {
      LoginScreenText.encode(message.loginText, writer.uint32(26).fork()).ldelim();
    }
    if (message.passwordText !== undefined) {
      PasswordScreenText.encode(message.passwordText, writer.uint32(34).fork()).ldelim();
    }
    if (message.usernameChangeText !== undefined) {
      UsernameChangeScreenText.encode(message.usernameChangeText, writer.uint32(42).fork()).ldelim();
    }
    if (message.usernameChangeDoneText !== undefined) {
      UsernameChangeDoneScreenText.encode(message.usernameChangeDoneText, writer.uint32(50).fork()).ldelim();
    }
    if (message.initPasswordText !== undefined) {
      InitPasswordScreenText.encode(message.initPasswordText, writer.uint32(58).fork()).ldelim();
    }
    if (message.initPasswordDoneText !== undefined) {
      InitPasswordDoneScreenText.encode(message.initPasswordDoneText, writer.uint32(66).fork()).ldelim();
    }
    if (message.emailVerificationText !== undefined) {
      EmailVerificationScreenText.encode(message.emailVerificationText, writer.uint32(74).fork()).ldelim();
    }
    if (message.emailVerificationDoneText !== undefined) {
      EmailVerificationDoneScreenText.encode(message.emailVerificationDoneText, writer.uint32(82).fork()).ldelim();
    }
    if (message.initializeUserText !== undefined) {
      InitializeUserScreenText.encode(message.initializeUserText, writer.uint32(90).fork()).ldelim();
    }
    if (message.initializeDoneText !== undefined) {
      InitializeUserDoneScreenText.encode(message.initializeDoneText, writer.uint32(98).fork()).ldelim();
    }
    if (message.initMfaPromptText !== undefined) {
      InitMFAPromptScreenText.encode(message.initMfaPromptText, writer.uint32(106).fork()).ldelim();
    }
    if (message.initMfaOtpText !== undefined) {
      InitMFAOTPScreenText.encode(message.initMfaOtpText, writer.uint32(114).fork()).ldelim();
    }
    if (message.initMfaU2fText !== undefined) {
      InitMFAU2FScreenText.encode(message.initMfaU2fText, writer.uint32(122).fork()).ldelim();
    }
    if (message.initMfaDoneText !== undefined) {
      InitMFADoneScreenText.encode(message.initMfaDoneText, writer.uint32(130).fork()).ldelim();
    }
    if (message.mfaProvidersText !== undefined) {
      MFAProvidersText.encode(message.mfaProvidersText, writer.uint32(138).fork()).ldelim();
    }
    if (message.verifyMfaOtpText !== undefined) {
      VerifyMFAOTPScreenText.encode(message.verifyMfaOtpText, writer.uint32(146).fork()).ldelim();
    }
    if (message.verifyMfaU2fText !== undefined) {
      VerifyMFAU2FScreenText.encode(message.verifyMfaU2fText, writer.uint32(154).fork()).ldelim();
    }
    if (message.passwordlessText !== undefined) {
      PasswordlessScreenText.encode(message.passwordlessText, writer.uint32(162).fork()).ldelim();
    }
    if (message.passwordChangeText !== undefined) {
      PasswordChangeScreenText.encode(message.passwordChangeText, writer.uint32(170).fork()).ldelim();
    }
    if (message.passwordChangeDoneText !== undefined) {
      PasswordChangeDoneScreenText.encode(message.passwordChangeDoneText, writer.uint32(178).fork()).ldelim();
    }
    if (message.passwordResetDoneText !== undefined) {
      PasswordResetDoneScreenText.encode(message.passwordResetDoneText, writer.uint32(186).fork()).ldelim();
    }
    if (message.registrationOptionText !== undefined) {
      RegistrationOptionScreenText.encode(message.registrationOptionText, writer.uint32(194).fork()).ldelim();
    }
    if (message.registrationUserText !== undefined) {
      RegistrationUserScreenText.encode(message.registrationUserText, writer.uint32(202).fork()).ldelim();
    }
    if (message.registrationOrgText !== undefined) {
      RegistrationOrgScreenText.encode(message.registrationOrgText, writer.uint32(210).fork()).ldelim();
    }
    if (message.linkingUserDoneText !== undefined) {
      LinkingUserDoneScreenText.encode(message.linkingUserDoneText, writer.uint32(218).fork()).ldelim();
    }
    if (message.externalUserNotFoundText !== undefined) {
      ExternalUserNotFoundScreenText.encode(message.externalUserNotFoundText, writer.uint32(226).fork()).ldelim();
    }
    if (message.successLoginText !== undefined) {
      SuccessLoginScreenText.encode(message.successLoginText, writer.uint32(234).fork()).ldelim();
    }
    if (message.logoutText !== undefined) {
      LogoutDoneScreenText.encode(message.logoutText, writer.uint32(242).fork()).ldelim();
    }
    if (message.footerText !== undefined) {
      FooterText.encode(message.footerText, writer.uint32(250).fork()).ldelim();
    }
    if (message.passwordlessPromptText !== undefined) {
      PasswordlessPromptScreenText.encode(message.passwordlessPromptText, writer.uint32(258).fork()).ldelim();
    }
    if (message.passwordlessRegistrationText !== undefined) {
      PasswordlessRegistrationScreenText.encode(message.passwordlessRegistrationText, writer.uint32(266).fork())
        .ldelim();
    }
    if (message.passwordlessRegistrationDoneText !== undefined) {
      PasswordlessRegistrationDoneScreenText.encode(message.passwordlessRegistrationDoneText, writer.uint32(274).fork())
        .ldelim();
    }
    if (message.externalRegistrationUserOverviewText !== undefined) {
      ExternalRegistrationUserOverviewScreenText.encode(
        message.externalRegistrationUserOverviewText,
        writer.uint32(282).fork(),
      ).ldelim();
    }
    if (message.isDefault === true) {
      writer.uint32(288).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginCustomText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginCustomText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selectAccountText = SelectAccountScreenText.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginText = LoginScreenText.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.passwordText = PasswordScreenText.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.usernameChangeText = UsernameChangeScreenText.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.usernameChangeDoneText = UsernameChangeDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.initPasswordText = InitPasswordScreenText.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.initPasswordDoneText = InitPasswordDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.emailVerificationText = EmailVerificationScreenText.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.emailVerificationDoneText = EmailVerificationDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.initializeUserText = InitializeUserScreenText.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.initializeDoneText = InitializeUserDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.initMfaPromptText = InitMFAPromptScreenText.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.initMfaOtpText = InitMFAOTPScreenText.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.initMfaU2fText = InitMFAU2FScreenText.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.initMfaDoneText = InitMFADoneScreenText.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.mfaProvidersText = MFAProvidersText.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.verifyMfaOtpText = VerifyMFAOTPScreenText.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.verifyMfaU2fText = VerifyMFAU2FScreenText.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.passwordlessText = PasswordlessScreenText.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.passwordChangeText = PasswordChangeScreenText.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.passwordChangeDoneText = PasswordChangeDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.passwordResetDoneText = PasswordResetDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.registrationOptionText = RegistrationOptionScreenText.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.registrationUserText = RegistrationUserScreenText.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.registrationOrgText = RegistrationOrgScreenText.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.linkingUserDoneText = LinkingUserDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.externalUserNotFoundText = ExternalUserNotFoundScreenText.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.successLoginText = SuccessLoginScreenText.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.logoutText = LogoutDoneScreenText.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.footerText = FooterText.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.passwordlessPromptText = PasswordlessPromptScreenText.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.passwordlessRegistrationText = PasswordlessRegistrationScreenText.decode(reader, reader.uint32());
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.passwordlessRegistrationDoneText = PasswordlessRegistrationDoneScreenText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.externalRegistrationUserOverviewText = ExternalRegistrationUserOverviewScreenText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 36:
          if (tag !== 288) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LoginCustomText>): LoginCustomText {
    return LoginCustomText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginCustomText>): LoginCustomText {
    const message = createBaseLoginCustomText();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.selectAccountText = (object.selectAccountText !== undefined && object.selectAccountText !== null)
      ? SelectAccountScreenText.fromPartial(object.selectAccountText)
      : undefined;
    message.loginText = (object.loginText !== undefined && object.loginText !== null)
      ? LoginScreenText.fromPartial(object.loginText)
      : undefined;
    message.passwordText = (object.passwordText !== undefined && object.passwordText !== null)
      ? PasswordScreenText.fromPartial(object.passwordText)
      : undefined;
    message.usernameChangeText = (object.usernameChangeText !== undefined && object.usernameChangeText !== null)
      ? UsernameChangeScreenText.fromPartial(object.usernameChangeText)
      : undefined;
    message.usernameChangeDoneText =
      (object.usernameChangeDoneText !== undefined && object.usernameChangeDoneText !== null)
        ? UsernameChangeDoneScreenText.fromPartial(object.usernameChangeDoneText)
        : undefined;
    message.initPasswordText = (object.initPasswordText !== undefined && object.initPasswordText !== null)
      ? InitPasswordScreenText.fromPartial(object.initPasswordText)
      : undefined;
    message.initPasswordDoneText = (object.initPasswordDoneText !== undefined && object.initPasswordDoneText !== null)
      ? InitPasswordDoneScreenText.fromPartial(object.initPasswordDoneText)
      : undefined;
    message.emailVerificationText =
      (object.emailVerificationText !== undefined && object.emailVerificationText !== null)
        ? EmailVerificationScreenText.fromPartial(object.emailVerificationText)
        : undefined;
    message.emailVerificationDoneText =
      (object.emailVerificationDoneText !== undefined && object.emailVerificationDoneText !== null)
        ? EmailVerificationDoneScreenText.fromPartial(object.emailVerificationDoneText)
        : undefined;
    message.initializeUserText = (object.initializeUserText !== undefined && object.initializeUserText !== null)
      ? InitializeUserScreenText.fromPartial(object.initializeUserText)
      : undefined;
    message.initializeDoneText = (object.initializeDoneText !== undefined && object.initializeDoneText !== null)
      ? InitializeUserDoneScreenText.fromPartial(object.initializeDoneText)
      : undefined;
    message.initMfaPromptText = (object.initMfaPromptText !== undefined && object.initMfaPromptText !== null)
      ? InitMFAPromptScreenText.fromPartial(object.initMfaPromptText)
      : undefined;
    message.initMfaOtpText = (object.initMfaOtpText !== undefined && object.initMfaOtpText !== null)
      ? InitMFAOTPScreenText.fromPartial(object.initMfaOtpText)
      : undefined;
    message.initMfaU2fText = (object.initMfaU2fText !== undefined && object.initMfaU2fText !== null)
      ? InitMFAU2FScreenText.fromPartial(object.initMfaU2fText)
      : undefined;
    message.initMfaDoneText = (object.initMfaDoneText !== undefined && object.initMfaDoneText !== null)
      ? InitMFADoneScreenText.fromPartial(object.initMfaDoneText)
      : undefined;
    message.mfaProvidersText = (object.mfaProvidersText !== undefined && object.mfaProvidersText !== null)
      ? MFAProvidersText.fromPartial(object.mfaProvidersText)
      : undefined;
    message.verifyMfaOtpText = (object.verifyMfaOtpText !== undefined && object.verifyMfaOtpText !== null)
      ? VerifyMFAOTPScreenText.fromPartial(object.verifyMfaOtpText)
      : undefined;
    message.verifyMfaU2fText = (object.verifyMfaU2fText !== undefined && object.verifyMfaU2fText !== null)
      ? VerifyMFAU2FScreenText.fromPartial(object.verifyMfaU2fText)
      : undefined;
    message.passwordlessText = (object.passwordlessText !== undefined && object.passwordlessText !== null)
      ? PasswordlessScreenText.fromPartial(object.passwordlessText)
      : undefined;
    message.passwordChangeText = (object.passwordChangeText !== undefined && object.passwordChangeText !== null)
      ? PasswordChangeScreenText.fromPartial(object.passwordChangeText)
      : undefined;
    message.passwordChangeDoneText =
      (object.passwordChangeDoneText !== undefined && object.passwordChangeDoneText !== null)
        ? PasswordChangeDoneScreenText.fromPartial(object.passwordChangeDoneText)
        : undefined;
    message.passwordResetDoneText =
      (object.passwordResetDoneText !== undefined && object.passwordResetDoneText !== null)
        ? PasswordResetDoneScreenText.fromPartial(object.passwordResetDoneText)
        : undefined;
    message.registrationOptionText =
      (object.registrationOptionText !== undefined && object.registrationOptionText !== null)
        ? RegistrationOptionScreenText.fromPartial(object.registrationOptionText)
        : undefined;
    message.registrationUserText = (object.registrationUserText !== undefined && object.registrationUserText !== null)
      ? RegistrationUserScreenText.fromPartial(object.registrationUserText)
      : undefined;
    message.registrationOrgText = (object.registrationOrgText !== undefined && object.registrationOrgText !== null)
      ? RegistrationOrgScreenText.fromPartial(object.registrationOrgText)
      : undefined;
    message.linkingUserDoneText = (object.linkingUserDoneText !== undefined && object.linkingUserDoneText !== null)
      ? LinkingUserDoneScreenText.fromPartial(object.linkingUserDoneText)
      : undefined;
    message.externalUserNotFoundText =
      (object.externalUserNotFoundText !== undefined && object.externalUserNotFoundText !== null)
        ? ExternalUserNotFoundScreenText.fromPartial(object.externalUserNotFoundText)
        : undefined;
    message.successLoginText = (object.successLoginText !== undefined && object.successLoginText !== null)
      ? SuccessLoginScreenText.fromPartial(object.successLoginText)
      : undefined;
    message.logoutText = (object.logoutText !== undefined && object.logoutText !== null)
      ? LogoutDoneScreenText.fromPartial(object.logoutText)
      : undefined;
    message.footerText = (object.footerText !== undefined && object.footerText !== null)
      ? FooterText.fromPartial(object.footerText)
      : undefined;
    message.passwordlessPromptText =
      (object.passwordlessPromptText !== undefined && object.passwordlessPromptText !== null)
        ? PasswordlessPromptScreenText.fromPartial(object.passwordlessPromptText)
        : undefined;
    message.passwordlessRegistrationText =
      (object.passwordlessRegistrationText !== undefined && object.passwordlessRegistrationText !== null)
        ? PasswordlessRegistrationScreenText.fromPartial(object.passwordlessRegistrationText)
        : undefined;
    message.passwordlessRegistrationDoneText =
      (object.passwordlessRegistrationDoneText !== undefined && object.passwordlessRegistrationDoneText !== null)
        ? PasswordlessRegistrationDoneScreenText.fromPartial(object.passwordlessRegistrationDoneText)
        : undefined;
    message.externalRegistrationUserOverviewText =
      (object.externalRegistrationUserOverviewText !== undefined &&
          object.externalRegistrationUserOverviewText !== null)
        ? ExternalRegistrationUserOverviewScreenText.fromPartial(object.externalRegistrationUserOverviewText)
        : undefined;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseSelectAccountScreenText(): SelectAccountScreenText {
  return {
    title: "",
    description: "",
    titleLinkingProcess: "",
    descriptionLinkingProcess: "",
    otherUser: "",
    sessionStateActive: "",
    sessionStateInactive: "",
    userMustBeMemberOfOrg: "",
  };
}

export const SelectAccountScreenText = {
  encode(message: SelectAccountScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.titleLinkingProcess !== "") {
      writer.uint32(26).string(message.titleLinkingProcess);
    }
    if (message.descriptionLinkingProcess !== "") {
      writer.uint32(34).string(message.descriptionLinkingProcess);
    }
    if (message.otherUser !== "") {
      writer.uint32(42).string(message.otherUser);
    }
    if (message.sessionStateActive !== "") {
      writer.uint32(50).string(message.sessionStateActive);
    }
    if (message.sessionStateInactive !== "") {
      writer.uint32(58).string(message.sessionStateInactive);
    }
    if (message.userMustBeMemberOfOrg !== "") {
      writer.uint32(66).string(message.userMustBeMemberOfOrg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectAccountScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectAccountScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.titleLinkingProcess = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.descriptionLinkingProcess = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.otherUser = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sessionStateActive = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sessionStateInactive = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.userMustBeMemberOfOrg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SelectAccountScreenText>): SelectAccountScreenText {
    return SelectAccountScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SelectAccountScreenText>): SelectAccountScreenText {
    const message = createBaseSelectAccountScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.titleLinkingProcess = object.titleLinkingProcess ?? "";
    message.descriptionLinkingProcess = object.descriptionLinkingProcess ?? "";
    message.otherUser = object.otherUser ?? "";
    message.sessionStateActive = object.sessionStateActive ?? "";
    message.sessionStateInactive = object.sessionStateInactive ?? "";
    message.userMustBeMemberOfOrg = object.userMustBeMemberOfOrg ?? "";
    return message;
  },
};

function createBaseLoginScreenText(): LoginScreenText {
  return {
    title: "",
    description: "",
    titleLinkingProcess: "",
    descriptionLinkingProcess: "",
    userMustBeMemberOfOrg: "",
    loginNameLabel: "",
    registerButtonText: "",
    nextButtonText: "",
    externalUserDescription: "",
    userNamePlaceholder: "",
    loginNamePlaceholder: "",
  };
}

export const LoginScreenText = {
  encode(message: LoginScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.titleLinkingProcess !== "") {
      writer.uint32(26).string(message.titleLinkingProcess);
    }
    if (message.descriptionLinkingProcess !== "") {
      writer.uint32(34).string(message.descriptionLinkingProcess);
    }
    if (message.userMustBeMemberOfOrg !== "") {
      writer.uint32(42).string(message.userMustBeMemberOfOrg);
    }
    if (message.loginNameLabel !== "") {
      writer.uint32(50).string(message.loginNameLabel);
    }
    if (message.registerButtonText !== "") {
      writer.uint32(58).string(message.registerButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(66).string(message.nextButtonText);
    }
    if (message.externalUserDescription !== "") {
      writer.uint32(74).string(message.externalUserDescription);
    }
    if (message.userNamePlaceholder !== "") {
      writer.uint32(82).string(message.userNamePlaceholder);
    }
    if (message.loginNamePlaceholder !== "") {
      writer.uint32(90).string(message.loginNamePlaceholder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.titleLinkingProcess = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.descriptionLinkingProcess = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userMustBeMemberOfOrg = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.loginNameLabel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.registerButtonText = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.externalUserDescription = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.userNamePlaceholder = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.loginNamePlaceholder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LoginScreenText>): LoginScreenText {
    return LoginScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginScreenText>): LoginScreenText {
    const message = createBaseLoginScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.titleLinkingProcess = object.titleLinkingProcess ?? "";
    message.descriptionLinkingProcess = object.descriptionLinkingProcess ?? "";
    message.userMustBeMemberOfOrg = object.userMustBeMemberOfOrg ?? "";
    message.loginNameLabel = object.loginNameLabel ?? "";
    message.registerButtonText = object.registerButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.externalUserDescription = object.externalUserDescription ?? "";
    message.userNamePlaceholder = object.userNamePlaceholder ?? "";
    message.loginNamePlaceholder = object.loginNamePlaceholder ?? "";
    return message;
  },
};

function createBasePasswordScreenText(): PasswordScreenText {
  return {
    title: "",
    description: "",
    passwordLabel: "",
    resetLinkText: "",
    backButtonText: "",
    nextButtonText: "",
    minLength: "",
    hasUppercase: "",
    hasLowercase: "",
    hasNumber: "",
    hasSymbol: "",
    confirmation: "",
  };
}

export const PasswordScreenText = {
  encode(message: PasswordScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.passwordLabel !== "") {
      writer.uint32(26).string(message.passwordLabel);
    }
    if (message.resetLinkText !== "") {
      writer.uint32(34).string(message.resetLinkText);
    }
    if (message.backButtonText !== "") {
      writer.uint32(42).string(message.backButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(50).string(message.nextButtonText);
    }
    if (message.minLength !== "") {
      writer.uint32(58).string(message.minLength);
    }
    if (message.hasUppercase !== "") {
      writer.uint32(66).string(message.hasUppercase);
    }
    if (message.hasLowercase !== "") {
      writer.uint32(74).string(message.hasLowercase);
    }
    if (message.hasNumber !== "") {
      writer.uint32(82).string(message.hasNumber);
    }
    if (message.hasSymbol !== "") {
      writer.uint32(90).string(message.hasSymbol);
    }
    if (message.confirmation !== "") {
      writer.uint32(98).string(message.confirmation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.passwordLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resetLinkText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.backButtonText = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.minLength = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hasUppercase = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.hasLowercase = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.hasNumber = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.hasSymbol = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.confirmation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordScreenText>): PasswordScreenText {
    return PasswordScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordScreenText>): PasswordScreenText {
    const message = createBasePasswordScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.passwordLabel = object.passwordLabel ?? "";
    message.resetLinkText = object.resetLinkText ?? "";
    message.backButtonText = object.backButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.minLength = object.minLength ?? "";
    message.hasUppercase = object.hasUppercase ?? "";
    message.hasLowercase = object.hasLowercase ?? "";
    message.hasNumber = object.hasNumber ?? "";
    message.hasSymbol = object.hasSymbol ?? "";
    message.confirmation = object.confirmation ?? "";
    return message;
  },
};

function createBaseUsernameChangeScreenText(): UsernameChangeScreenText {
  return { title: "", description: "", usernameLabel: "", cancelButtonText: "", nextButtonText: "" };
}

export const UsernameChangeScreenText = {
  encode(message: UsernameChangeScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.usernameLabel !== "") {
      writer.uint32(26).string(message.usernameLabel);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(34).string(message.cancelButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(42).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsernameChangeScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsernameChangeScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.usernameLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UsernameChangeScreenText>): UsernameChangeScreenText {
    return UsernameChangeScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UsernameChangeScreenText>): UsernameChangeScreenText {
    const message = createBaseUsernameChangeScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.usernameLabel = object.usernameLabel ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseUsernameChangeDoneScreenText(): UsernameChangeDoneScreenText {
  return { title: "", description: "", nextButtonText: "" };
}

export const UsernameChangeDoneScreenText = {
  encode(message: UsernameChangeDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsernameChangeDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsernameChangeDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UsernameChangeDoneScreenText>): UsernameChangeDoneScreenText {
    return UsernameChangeDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UsernameChangeDoneScreenText>): UsernameChangeDoneScreenText {
    const message = createBaseUsernameChangeDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseInitPasswordScreenText(): InitPasswordScreenText {
  return {
    title: "",
    description: "",
    codeLabel: "",
    newPasswordLabel: "",
    newPasswordConfirmLabel: "",
    nextButtonText: "",
    resendButtonText: "",
  };
}

export const InitPasswordScreenText = {
  encode(message: InitPasswordScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeLabel !== "") {
      writer.uint32(26).string(message.codeLabel);
    }
    if (message.newPasswordLabel !== "") {
      writer.uint32(34).string(message.newPasswordLabel);
    }
    if (message.newPasswordConfirmLabel !== "") {
      writer.uint32(42).string(message.newPasswordConfirmLabel);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(50).string(message.nextButtonText);
    }
    if (message.resendButtonText !== "") {
      writer.uint32(58).string(message.resendButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitPasswordScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitPasswordScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newPasswordLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newPasswordConfirmLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resendButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitPasswordScreenText>): InitPasswordScreenText {
    return InitPasswordScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitPasswordScreenText>): InitPasswordScreenText {
    const message = createBaseInitPasswordScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeLabel = object.codeLabel ?? "";
    message.newPasswordLabel = object.newPasswordLabel ?? "";
    message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.resendButtonText = object.resendButtonText ?? "";
    return message;
  },
};

function createBaseInitPasswordDoneScreenText(): InitPasswordDoneScreenText {
  return { title: "", description: "", nextButtonText: "", cancelButtonText: "" };
}

export const InitPasswordDoneScreenText = {
  encode(message: InitPasswordDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(34).string(message.cancelButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitPasswordDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitPasswordDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitPasswordDoneScreenText>): InitPasswordDoneScreenText {
    return InitPasswordDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitPasswordDoneScreenText>): InitPasswordDoneScreenText {
    const message = createBaseInitPasswordDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    return message;
  },
};

function createBaseEmailVerificationScreenText(): EmailVerificationScreenText {
  return { title: "", description: "", codeLabel: "", nextButtonText: "", resendButtonText: "" };
}

export const EmailVerificationScreenText = {
  encode(message: EmailVerificationScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeLabel !== "") {
      writer.uint32(26).string(message.codeLabel);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    if (message.resendButtonText !== "") {
      writer.uint32(42).string(message.resendButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailVerificationScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailVerificationScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resendButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<EmailVerificationScreenText>): EmailVerificationScreenText {
    return EmailVerificationScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EmailVerificationScreenText>): EmailVerificationScreenText {
    const message = createBaseEmailVerificationScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeLabel = object.codeLabel ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.resendButtonText = object.resendButtonText ?? "";
    return message;
  },
};

function createBaseEmailVerificationDoneScreenText(): EmailVerificationDoneScreenText {
  return { title: "", description: "", nextButtonText: "", cancelButtonText: "", loginButtonText: "" };
}

export const EmailVerificationDoneScreenText = {
  encode(message: EmailVerificationDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(34).string(message.cancelButtonText);
    }
    if (message.loginButtonText !== "") {
      writer.uint32(42).string(message.loginButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailVerificationDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailVerificationDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loginButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<EmailVerificationDoneScreenText>): EmailVerificationDoneScreenText {
    return EmailVerificationDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EmailVerificationDoneScreenText>): EmailVerificationDoneScreenText {
    const message = createBaseEmailVerificationDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.loginButtonText = object.loginButtonText ?? "";
    return message;
  },
};

function createBaseInitializeUserScreenText(): InitializeUserScreenText {
  return {
    title: "",
    description: "",
    codeLabel: "",
    newPasswordLabel: "",
    newPasswordConfirmLabel: "",
    resendButtonText: "",
    nextButtonText: "",
  };
}

export const InitializeUserScreenText = {
  encode(message: InitializeUserScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeLabel !== "") {
      writer.uint32(26).string(message.codeLabel);
    }
    if (message.newPasswordLabel !== "") {
      writer.uint32(34).string(message.newPasswordLabel);
    }
    if (message.newPasswordConfirmLabel !== "") {
      writer.uint32(42).string(message.newPasswordConfirmLabel);
    }
    if (message.resendButtonText !== "") {
      writer.uint32(50).string(message.resendButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(58).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeUserScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeUserScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newPasswordLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newPasswordConfirmLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resendButtonText = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitializeUserScreenText>): InitializeUserScreenText {
    return InitializeUserScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitializeUserScreenText>): InitializeUserScreenText {
    const message = createBaseInitializeUserScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeLabel = object.codeLabel ?? "";
    message.newPasswordLabel = object.newPasswordLabel ?? "";
    message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
    message.resendButtonText = object.resendButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseInitializeUserDoneScreenText(): InitializeUserDoneScreenText {
  return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}

export const InitializeUserDoneScreenText = {
  encode(message: InitializeUserDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(26).string(message.cancelButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeUserDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeUserDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitializeUserDoneScreenText>): InitializeUserDoneScreenText {
    return InitializeUserDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitializeUserDoneScreenText>): InitializeUserDoneScreenText {
    const message = createBaseInitializeUserDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseInitMFAPromptScreenText(): InitMFAPromptScreenText {
  return { title: "", description: "", otpOption: "", u2fOption: "", skipButtonText: "", nextButtonText: "" };
}

export const InitMFAPromptScreenText = {
  encode(message: InitMFAPromptScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.otpOption !== "") {
      writer.uint32(26).string(message.otpOption);
    }
    if (message.u2fOption !== "") {
      writer.uint32(34).string(message.u2fOption);
    }
    if (message.skipButtonText !== "") {
      writer.uint32(42).string(message.skipButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(50).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAPromptScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMFAPromptScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.otpOption = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.u2fOption = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.skipButtonText = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitMFAPromptScreenText>): InitMFAPromptScreenText {
    return InitMFAPromptScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitMFAPromptScreenText>): InitMFAPromptScreenText {
    const message = createBaseInitMFAPromptScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.otpOption = object.otpOption ?? "";
    message.u2fOption = object.u2fOption ?? "";
    message.skipButtonText = object.skipButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseInitMFAOTPScreenText(): InitMFAOTPScreenText {
  return {
    title: "",
    description: "",
    descriptionOtp: "",
    secretLabel: "",
    codeLabel: "",
    nextButtonText: "",
    cancelButtonText: "",
  };
}

export const InitMFAOTPScreenText = {
  encode(message: InitMFAOTPScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.descriptionOtp !== "") {
      writer.uint32(26).string(message.descriptionOtp);
    }
    if (message.secretLabel !== "") {
      writer.uint32(34).string(message.secretLabel);
    }
    if (message.codeLabel !== "") {
      writer.uint32(42).string(message.codeLabel);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(50).string(message.nextButtonText);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(58).string(message.cancelButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAOTPScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMFAOTPScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.descriptionOtp = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.secretLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.codeLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitMFAOTPScreenText>): InitMFAOTPScreenText {
    return InitMFAOTPScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitMFAOTPScreenText>): InitMFAOTPScreenText {
    const message = createBaseInitMFAOTPScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.descriptionOtp = object.descriptionOtp ?? "";
    message.secretLabel = object.secretLabel ?? "";
    message.codeLabel = object.codeLabel ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    return message;
  },
};

function createBaseInitMFAU2FScreenText(): InitMFAU2FScreenText {
  return {
    title: "",
    description: "",
    tokenNameLabel: "",
    notSupported: "",
    registerTokenButtonText: "",
    errorRetry: "",
  };
}

export const InitMFAU2FScreenText = {
  encode(message: InitMFAU2FScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.tokenNameLabel !== "") {
      writer.uint32(26).string(message.tokenNameLabel);
    }
    if (message.notSupported !== "") {
      writer.uint32(34).string(message.notSupported);
    }
    if (message.registerTokenButtonText !== "") {
      writer.uint32(42).string(message.registerTokenButtonText);
    }
    if (message.errorRetry !== "") {
      writer.uint32(50).string(message.errorRetry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAU2FScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMFAU2FScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenNameLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.notSupported = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.registerTokenButtonText = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.errorRetry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitMFAU2FScreenText>): InitMFAU2FScreenText {
    return InitMFAU2FScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitMFAU2FScreenText>): InitMFAU2FScreenText {
    const message = createBaseInitMFAU2FScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tokenNameLabel = object.tokenNameLabel ?? "";
    message.notSupported = object.notSupported ?? "";
    message.registerTokenButtonText = object.registerTokenButtonText ?? "";
    message.errorRetry = object.errorRetry ?? "";
    return message;
  },
};

function createBaseInitMFADoneScreenText(): InitMFADoneScreenText {
  return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}

export const InitMFADoneScreenText = {
  encode(message: InitMFADoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(26).string(message.cancelButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMFADoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMFADoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InitMFADoneScreenText>): InitMFADoneScreenText {
    return InitMFADoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InitMFADoneScreenText>): InitMFADoneScreenText {
    const message = createBaseInitMFADoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseMFAProvidersText(): MFAProvidersText {
  return { chooseOther: "", otp: "", u2f: "" };
}

export const MFAProvidersText = {
  encode(message: MFAProvidersText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chooseOther !== "") {
      writer.uint32(10).string(message.chooseOther);
    }
    if (message.otp !== "") {
      writer.uint32(18).string(message.otp);
    }
    if (message.u2f !== "") {
      writer.uint32(26).string(message.u2f);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MFAProvidersText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMFAProvidersText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chooseOther = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.otp = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.u2f = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MFAProvidersText>): MFAProvidersText {
    return MFAProvidersText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MFAProvidersText>): MFAProvidersText {
    const message = createBaseMFAProvidersText();
    message.chooseOther = object.chooseOther ?? "";
    message.otp = object.otp ?? "";
    message.u2f = object.u2f ?? "";
    return message;
  },
};

function createBaseVerifyMFAOTPScreenText(): VerifyMFAOTPScreenText {
  return { title: "", description: "", codeLabel: "", nextButtonText: "" };
}

export const VerifyMFAOTPScreenText = {
  encode(message: VerifyMFAOTPScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeLabel !== "") {
      writer.uint32(26).string(message.codeLabel);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMFAOTPScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyMFAOTPScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VerifyMFAOTPScreenText>): VerifyMFAOTPScreenText {
    return VerifyMFAOTPScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyMFAOTPScreenText>): VerifyMFAOTPScreenText {
    const message = createBaseVerifyMFAOTPScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeLabel = object.codeLabel ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseVerifyMFAU2FScreenText(): VerifyMFAU2FScreenText {
  return { title: "", description: "", validateTokenText: "", notSupported: "", errorRetry: "" };
}

export const VerifyMFAU2FScreenText = {
  encode(message: VerifyMFAU2FScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.validateTokenText !== "") {
      writer.uint32(26).string(message.validateTokenText);
    }
    if (message.notSupported !== "") {
      writer.uint32(34).string(message.notSupported);
    }
    if (message.errorRetry !== "") {
      writer.uint32(42).string(message.errorRetry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMFAU2FScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyMFAU2FScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validateTokenText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.notSupported = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.errorRetry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VerifyMFAU2FScreenText>): VerifyMFAU2FScreenText {
    return VerifyMFAU2FScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyMFAU2FScreenText>): VerifyMFAU2FScreenText {
    const message = createBaseVerifyMFAU2FScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.validateTokenText = object.validateTokenText ?? "";
    message.notSupported = object.notSupported ?? "";
    message.errorRetry = object.errorRetry ?? "";
    return message;
  },
};

function createBasePasswordlessScreenText(): PasswordlessScreenText {
  return {
    title: "",
    description: "",
    loginWithPwButtonText: "",
    validateTokenButtonText: "",
    notSupported: "",
    errorRetry: "",
  };
}

export const PasswordlessScreenText = {
  encode(message: PasswordlessScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.loginWithPwButtonText !== "") {
      writer.uint32(26).string(message.loginWithPwButtonText);
    }
    if (message.validateTokenButtonText !== "") {
      writer.uint32(34).string(message.validateTokenButtonText);
    }
    if (message.notSupported !== "") {
      writer.uint32(42).string(message.notSupported);
    }
    if (message.errorRetry !== "") {
      writer.uint32(50).string(message.errorRetry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordlessScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginWithPwButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validateTokenButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.notSupported = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.errorRetry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordlessScreenText>): PasswordlessScreenText {
    return PasswordlessScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordlessScreenText>): PasswordlessScreenText {
    const message = createBasePasswordlessScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.loginWithPwButtonText = object.loginWithPwButtonText ?? "";
    message.validateTokenButtonText = object.validateTokenButtonText ?? "";
    message.notSupported = object.notSupported ?? "";
    message.errorRetry = object.errorRetry ?? "";
    return message;
  },
};

function createBasePasswordChangeScreenText(): PasswordChangeScreenText {
  return {
    title: "",
    description: "",
    oldPasswordLabel: "",
    newPasswordLabel: "",
    newPasswordConfirmLabel: "",
    cancelButtonText: "",
    nextButtonText: "",
  };
}

export const PasswordChangeScreenText = {
  encode(message: PasswordChangeScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.oldPasswordLabel !== "") {
      writer.uint32(26).string(message.oldPasswordLabel);
    }
    if (message.newPasswordLabel !== "") {
      writer.uint32(34).string(message.newPasswordLabel);
    }
    if (message.newPasswordConfirmLabel !== "") {
      writer.uint32(42).string(message.newPasswordConfirmLabel);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(50).string(message.cancelButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(58).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChangeScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChangeScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oldPasswordLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newPasswordLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newPasswordConfirmLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordChangeScreenText>): PasswordChangeScreenText {
    return PasswordChangeScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordChangeScreenText>): PasswordChangeScreenText {
    const message = createBasePasswordChangeScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.oldPasswordLabel = object.oldPasswordLabel ?? "";
    message.newPasswordLabel = object.newPasswordLabel ?? "";
    message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBasePasswordChangeDoneScreenText(): PasswordChangeDoneScreenText {
  return { title: "", description: "", nextButtonText: "" };
}

export const PasswordChangeDoneScreenText = {
  encode(message: PasswordChangeDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChangeDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordChangeDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordChangeDoneScreenText>): PasswordChangeDoneScreenText {
    return PasswordChangeDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordChangeDoneScreenText>): PasswordChangeDoneScreenText {
    const message = createBasePasswordChangeDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBasePasswordResetDoneScreenText(): PasswordResetDoneScreenText {
  return { title: "", description: "", nextButtonText: "" };
}

export const PasswordResetDoneScreenText = {
  encode(message: PasswordResetDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordResetDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordResetDoneScreenText>): PasswordResetDoneScreenText {
    return PasswordResetDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordResetDoneScreenText>): PasswordResetDoneScreenText {
    const message = createBasePasswordResetDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseRegistrationOptionScreenText(): RegistrationOptionScreenText {
  return { title: "", description: "", userNameButtonText: "", externalLoginDescription: "", loginButtonText: "" };
}

export const RegistrationOptionScreenText = {
  encode(message: RegistrationOptionScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.userNameButtonText !== "") {
      writer.uint32(26).string(message.userNameButtonText);
    }
    if (message.externalLoginDescription !== "") {
      writer.uint32(34).string(message.externalLoginDescription);
    }
    if (message.loginButtonText !== "") {
      writer.uint32(42).string(message.loginButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationOptionScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationOptionScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userNameButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalLoginDescription = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loginButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RegistrationOptionScreenText>): RegistrationOptionScreenText {
    return RegistrationOptionScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegistrationOptionScreenText>): RegistrationOptionScreenText {
    const message = createBaseRegistrationOptionScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.userNameButtonText = object.userNameButtonText ?? "";
    message.externalLoginDescription = object.externalLoginDescription ?? "";
    message.loginButtonText = object.loginButtonText ?? "";
    return message;
  },
};

function createBaseRegistrationUserScreenText(): RegistrationUserScreenText {
  return {
    title: "",
    description: "",
    descriptionOrgRegister: "",
    firstnameLabel: "",
    lastnameLabel: "",
    emailLabel: "",
    usernameLabel: "",
    languageLabel: "",
    genderLabel: "",
    passwordLabel: "",
    passwordConfirmLabel: "",
    tosAndPrivacyLabel: "",
    tosConfirm: "",
    tosLinkText: "",
    privacyConfirm: "",
    privacyLinkText: "",
    nextButtonText: "",
    backButtonText: "",
  };
}

export const RegistrationUserScreenText = {
  encode(message: RegistrationUserScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.descriptionOrgRegister !== "") {
      writer.uint32(26).string(message.descriptionOrgRegister);
    }
    if (message.firstnameLabel !== "") {
      writer.uint32(34).string(message.firstnameLabel);
    }
    if (message.lastnameLabel !== "") {
      writer.uint32(42).string(message.lastnameLabel);
    }
    if (message.emailLabel !== "") {
      writer.uint32(50).string(message.emailLabel);
    }
    if (message.usernameLabel !== "") {
      writer.uint32(58).string(message.usernameLabel);
    }
    if (message.languageLabel !== "") {
      writer.uint32(66).string(message.languageLabel);
    }
    if (message.genderLabel !== "") {
      writer.uint32(74).string(message.genderLabel);
    }
    if (message.passwordLabel !== "") {
      writer.uint32(82).string(message.passwordLabel);
    }
    if (message.passwordConfirmLabel !== "") {
      writer.uint32(90).string(message.passwordConfirmLabel);
    }
    if (message.tosAndPrivacyLabel !== "") {
      writer.uint32(98).string(message.tosAndPrivacyLabel);
    }
    if (message.tosConfirm !== "") {
      writer.uint32(106).string(message.tosConfirm);
    }
    if (message.tosLinkText !== "") {
      writer.uint32(122).string(message.tosLinkText);
    }
    if (message.privacyConfirm !== "") {
      writer.uint32(130).string(message.privacyConfirm);
    }
    if (message.privacyLinkText !== "") {
      writer.uint32(146).string(message.privacyLinkText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(162).string(message.nextButtonText);
    }
    if (message.backButtonText !== "") {
      writer.uint32(170).string(message.backButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationUserScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationUserScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.descriptionOrgRegister = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.firstnameLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastnameLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.emailLabel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.usernameLabel = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.languageLabel = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.genderLabel = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.passwordLabel = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.passwordConfirmLabel = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tosAndPrivacyLabel = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tosConfirm = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.tosLinkText = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.privacyConfirm = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.privacyLinkText = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.backButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RegistrationUserScreenText>): RegistrationUserScreenText {
    return RegistrationUserScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegistrationUserScreenText>): RegistrationUserScreenText {
    const message = createBaseRegistrationUserScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.descriptionOrgRegister = object.descriptionOrgRegister ?? "";
    message.firstnameLabel = object.firstnameLabel ?? "";
    message.lastnameLabel = object.lastnameLabel ?? "";
    message.emailLabel = object.emailLabel ?? "";
    message.usernameLabel = object.usernameLabel ?? "";
    message.languageLabel = object.languageLabel ?? "";
    message.genderLabel = object.genderLabel ?? "";
    message.passwordLabel = object.passwordLabel ?? "";
    message.passwordConfirmLabel = object.passwordConfirmLabel ?? "";
    message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
    message.tosConfirm = object.tosConfirm ?? "";
    message.tosLinkText = object.tosLinkText ?? "";
    message.privacyConfirm = object.privacyConfirm ?? "";
    message.privacyLinkText = object.privacyLinkText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.backButtonText = object.backButtonText ?? "";
    return message;
  },
};

function createBaseExternalRegistrationUserOverviewScreenText(): ExternalRegistrationUserOverviewScreenText {
  return {
    title: "",
    description: "",
    emailLabel: "",
    usernameLabel: "",
    firstnameLabel: "",
    lastnameLabel: "",
    nicknameLabel: "",
    languageLabel: "",
    phoneLabel: "",
    tosAndPrivacyLabel: "",
    tosConfirm: "",
    tosLinkText: "",
    privacyLinkText: "",
    backButtonText: "",
    nextButtonText: "",
    privacyConfirm: "",
  };
}

export const ExternalRegistrationUserOverviewScreenText = {
  encode(message: ExternalRegistrationUserOverviewScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.emailLabel !== "") {
      writer.uint32(26).string(message.emailLabel);
    }
    if (message.usernameLabel !== "") {
      writer.uint32(34).string(message.usernameLabel);
    }
    if (message.firstnameLabel !== "") {
      writer.uint32(42).string(message.firstnameLabel);
    }
    if (message.lastnameLabel !== "") {
      writer.uint32(50).string(message.lastnameLabel);
    }
    if (message.nicknameLabel !== "") {
      writer.uint32(58).string(message.nicknameLabel);
    }
    if (message.languageLabel !== "") {
      writer.uint32(66).string(message.languageLabel);
    }
    if (message.phoneLabel !== "") {
      writer.uint32(74).string(message.phoneLabel);
    }
    if (message.tosAndPrivacyLabel !== "") {
      writer.uint32(82).string(message.tosAndPrivacyLabel);
    }
    if (message.tosConfirm !== "") {
      writer.uint32(90).string(message.tosConfirm);
    }
    if (message.tosLinkText !== "") {
      writer.uint32(98).string(message.tosLinkText);
    }
    if (message.privacyLinkText !== "") {
      writer.uint32(114).string(message.privacyLinkText);
    }
    if (message.backButtonText !== "") {
      writer.uint32(122).string(message.backButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(130).string(message.nextButtonText);
    }
    if (message.privacyConfirm !== "") {
      writer.uint32(138).string(message.privacyConfirm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalRegistrationUserOverviewScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalRegistrationUserOverviewScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.emailLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.usernameLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.firstnameLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastnameLabel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nicknameLabel = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.languageLabel = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.phoneLabel = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.tosAndPrivacyLabel = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tosConfirm = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tosLinkText = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.privacyLinkText = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.backButtonText = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.privacyConfirm = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExternalRegistrationUserOverviewScreenText>): ExternalRegistrationUserOverviewScreenText {
    return ExternalRegistrationUserOverviewScreenText.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<ExternalRegistrationUserOverviewScreenText>,
  ): ExternalRegistrationUserOverviewScreenText {
    const message = createBaseExternalRegistrationUserOverviewScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.emailLabel = object.emailLabel ?? "";
    message.usernameLabel = object.usernameLabel ?? "";
    message.firstnameLabel = object.firstnameLabel ?? "";
    message.lastnameLabel = object.lastnameLabel ?? "";
    message.nicknameLabel = object.nicknameLabel ?? "";
    message.languageLabel = object.languageLabel ?? "";
    message.phoneLabel = object.phoneLabel ?? "";
    message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
    message.tosConfirm = object.tosConfirm ?? "";
    message.tosLinkText = object.tosLinkText ?? "";
    message.privacyLinkText = object.privacyLinkText ?? "";
    message.backButtonText = object.backButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.privacyConfirm = object.privacyConfirm ?? "";
    return message;
  },
};

function createBaseRegistrationOrgScreenText(): RegistrationOrgScreenText {
  return {
    title: "",
    description: "",
    orgnameLabel: "",
    firstnameLabel: "",
    lastnameLabel: "",
    usernameLabel: "",
    emailLabel: "",
    passwordLabel: "",
    passwordConfirmLabel: "",
    tosAndPrivacyLabel: "",
    tosConfirm: "",
    tosLinkText: "",
    privacyConfirm: "",
    privacyLinkText: "",
    saveButtonText: "",
  };
}

export const RegistrationOrgScreenText = {
  encode(message: RegistrationOrgScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.orgnameLabel !== "") {
      writer.uint32(26).string(message.orgnameLabel);
    }
    if (message.firstnameLabel !== "") {
      writer.uint32(34).string(message.firstnameLabel);
    }
    if (message.lastnameLabel !== "") {
      writer.uint32(42).string(message.lastnameLabel);
    }
    if (message.usernameLabel !== "") {
      writer.uint32(50).string(message.usernameLabel);
    }
    if (message.emailLabel !== "") {
      writer.uint32(58).string(message.emailLabel);
    }
    if (message.passwordLabel !== "") {
      writer.uint32(74).string(message.passwordLabel);
    }
    if (message.passwordConfirmLabel !== "") {
      writer.uint32(82).string(message.passwordConfirmLabel);
    }
    if (message.tosAndPrivacyLabel !== "") {
      writer.uint32(90).string(message.tosAndPrivacyLabel);
    }
    if (message.tosConfirm !== "") {
      writer.uint32(98).string(message.tosConfirm);
    }
    if (message.tosLinkText !== "") {
      writer.uint32(114).string(message.tosLinkText);
    }
    if (message.privacyConfirm !== "") {
      writer.uint32(122).string(message.privacyConfirm);
    }
    if (message.privacyLinkText !== "") {
      writer.uint32(138).string(message.privacyLinkText);
    }
    if (message.saveButtonText !== "") {
      writer.uint32(154).string(message.saveButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationOrgScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationOrgScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orgnameLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.firstnameLabel = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastnameLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.usernameLabel = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.emailLabel = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.passwordLabel = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.passwordConfirmLabel = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tosAndPrivacyLabel = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tosConfirm = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.tosLinkText = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.privacyConfirm = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.privacyLinkText = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.saveButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RegistrationOrgScreenText>): RegistrationOrgScreenText {
    return RegistrationOrgScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegistrationOrgScreenText>): RegistrationOrgScreenText {
    const message = createBaseRegistrationOrgScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.orgnameLabel = object.orgnameLabel ?? "";
    message.firstnameLabel = object.firstnameLabel ?? "";
    message.lastnameLabel = object.lastnameLabel ?? "";
    message.usernameLabel = object.usernameLabel ?? "";
    message.emailLabel = object.emailLabel ?? "";
    message.passwordLabel = object.passwordLabel ?? "";
    message.passwordConfirmLabel = object.passwordConfirmLabel ?? "";
    message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
    message.tosConfirm = object.tosConfirm ?? "";
    message.tosLinkText = object.tosLinkText ?? "";
    message.privacyConfirm = object.privacyConfirm ?? "";
    message.privacyLinkText = object.privacyLinkText ?? "";
    message.saveButtonText = object.saveButtonText ?? "";
    return message;
  },
};

function createBaseLinkingUserDoneScreenText(): LinkingUserDoneScreenText {
  return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}

export const LinkingUserDoneScreenText = {
  encode(message: LinkingUserDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(26).string(message.cancelButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkingUserDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkingUserDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LinkingUserDoneScreenText>): LinkingUserDoneScreenText {
    return LinkingUserDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LinkingUserDoneScreenText>): LinkingUserDoneScreenText {
    const message = createBaseLinkingUserDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseExternalUserNotFoundScreenText(): ExternalUserNotFoundScreenText {
  return {
    title: "",
    description: "",
    linkButtonText: "",
    autoRegisterButtonText: "",
    tosAndPrivacyLabel: "",
    tosConfirm: "",
    tosLinkText: "",
    privacyLinkText: "",
    privacyConfirm: "",
  };
}

export const ExternalUserNotFoundScreenText = {
  encode(message: ExternalUserNotFoundScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.linkButtonText !== "") {
      writer.uint32(26).string(message.linkButtonText);
    }
    if (message.autoRegisterButtonText !== "") {
      writer.uint32(34).string(message.autoRegisterButtonText);
    }
    if (message.tosAndPrivacyLabel !== "") {
      writer.uint32(42).string(message.tosAndPrivacyLabel);
    }
    if (message.tosConfirm !== "") {
      writer.uint32(50).string(message.tosConfirm);
    }
    if (message.tosLinkText !== "") {
      writer.uint32(58).string(message.tosLinkText);
    }
    if (message.privacyLinkText !== "") {
      writer.uint32(66).string(message.privacyLinkText);
    }
    if (message.privacyConfirm !== "") {
      writer.uint32(82).string(message.privacyConfirm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalUserNotFoundScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalUserNotFoundScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.linkButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.autoRegisterButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tosAndPrivacyLabel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tosConfirm = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tosLinkText = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.privacyLinkText = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.privacyConfirm = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExternalUserNotFoundScreenText>): ExternalUserNotFoundScreenText {
    return ExternalUserNotFoundScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalUserNotFoundScreenText>): ExternalUserNotFoundScreenText {
    const message = createBaseExternalUserNotFoundScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.linkButtonText = object.linkButtonText ?? "";
    message.autoRegisterButtonText = object.autoRegisterButtonText ?? "";
    message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
    message.tosConfirm = object.tosConfirm ?? "";
    message.tosLinkText = object.tosLinkText ?? "";
    message.privacyLinkText = object.privacyLinkText ?? "";
    message.privacyConfirm = object.privacyConfirm ?? "";
    return message;
  },
};

function createBaseSuccessLoginScreenText(): SuccessLoginScreenText {
  return { title: "", autoRedirectDescription: "", redirectedDescription: "", nextButtonText: "" };
}

export const SuccessLoginScreenText = {
  encode(message: SuccessLoginScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.autoRedirectDescription !== "") {
      writer.uint32(18).string(message.autoRedirectDescription);
    }
    if (message.redirectedDescription !== "") {
      writer.uint32(26).string(message.redirectedDescription);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(34).string(message.nextButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessLoginScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccessLoginScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.autoRedirectDescription = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redirectedDescription = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SuccessLoginScreenText>): SuccessLoginScreenText {
    return SuccessLoginScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuccessLoginScreenText>): SuccessLoginScreenText {
    const message = createBaseSuccessLoginScreenText();
    message.title = object.title ?? "";
    message.autoRedirectDescription = object.autoRedirectDescription ?? "";
    message.redirectedDescription = object.redirectedDescription ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    return message;
  },
};

function createBaseLogoutDoneScreenText(): LogoutDoneScreenText {
  return { title: "", description: "", loginButtonText: "" };
}

export const LogoutDoneScreenText = {
  encode(message: LogoutDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.loginButtonText !== "") {
      writer.uint32(26).string(message.loginButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogoutDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogoutDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LogoutDoneScreenText>): LogoutDoneScreenText {
    return LogoutDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogoutDoneScreenText>): LogoutDoneScreenText {
    const message = createBaseLogoutDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.loginButtonText = object.loginButtonText ?? "";
    return message;
  },
};

function createBaseFooterText(): FooterText {
  return { tos: "", privacyPolicy: "", help: "", supportEmail: "" };
}

export const FooterText = {
  encode(message: FooterText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tos !== "") {
      writer.uint32(10).string(message.tos);
    }
    if (message.privacyPolicy !== "") {
      writer.uint32(26).string(message.privacyPolicy);
    }
    if (message.help !== "") {
      writer.uint32(42).string(message.help);
    }
    if (message.supportEmail !== "") {
      writer.uint32(58).string(message.supportEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FooterText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFooterText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tos = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.privacyPolicy = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.help = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.supportEmail = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<FooterText>): FooterText {
    return FooterText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FooterText>): FooterText {
    const message = createBaseFooterText();
    message.tos = object.tos ?? "";
    message.privacyPolicy = object.privacyPolicy ?? "";
    message.help = object.help ?? "";
    message.supportEmail = object.supportEmail ?? "";
    return message;
  },
};

function createBasePasswordlessPromptScreenText(): PasswordlessPromptScreenText {
  return {
    title: "",
    description: "",
    descriptionInit: "",
    passwordlessButtonText: "",
    nextButtonText: "",
    skipButtonText: "",
  };
}

export const PasswordlessPromptScreenText = {
  encode(message: PasswordlessPromptScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.descriptionInit !== "") {
      writer.uint32(26).string(message.descriptionInit);
    }
    if (message.passwordlessButtonText !== "") {
      writer.uint32(34).string(message.passwordlessButtonText);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(42).string(message.nextButtonText);
    }
    if (message.skipButtonText !== "") {
      writer.uint32(50).string(message.skipButtonText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessPromptScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordlessPromptScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.descriptionInit = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.passwordlessButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.skipButtonText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordlessPromptScreenText>): PasswordlessPromptScreenText {
    return PasswordlessPromptScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordlessPromptScreenText>): PasswordlessPromptScreenText {
    const message = createBasePasswordlessPromptScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.descriptionInit = object.descriptionInit ?? "";
    message.passwordlessButtonText = object.passwordlessButtonText ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.skipButtonText = object.skipButtonText ?? "";
    return message;
  },
};

function createBasePasswordlessRegistrationScreenText(): PasswordlessRegistrationScreenText {
  return {
    title: "",
    description: "",
    tokenNameLabel: "",
    notSupported: "",
    registerTokenButtonText: "",
    errorRetry: "",
  };
}

export const PasswordlessRegistrationScreenText = {
  encode(message: PasswordlessRegistrationScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.tokenNameLabel !== "") {
      writer.uint32(26).string(message.tokenNameLabel);
    }
    if (message.notSupported !== "") {
      writer.uint32(34).string(message.notSupported);
    }
    if (message.registerTokenButtonText !== "") {
      writer.uint32(42).string(message.registerTokenButtonText);
    }
    if (message.errorRetry !== "") {
      writer.uint32(50).string(message.errorRetry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessRegistrationScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordlessRegistrationScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenNameLabel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.notSupported = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.registerTokenButtonText = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.errorRetry = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordlessRegistrationScreenText>): PasswordlessRegistrationScreenText {
    return PasswordlessRegistrationScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordlessRegistrationScreenText>): PasswordlessRegistrationScreenText {
    const message = createBasePasswordlessRegistrationScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tokenNameLabel = object.tokenNameLabel ?? "";
    message.notSupported = object.notSupported ?? "";
    message.registerTokenButtonText = object.registerTokenButtonText ?? "";
    message.errorRetry = object.errorRetry ?? "";
    return message;
  },
};

function createBasePasswordlessRegistrationDoneScreenText(): PasswordlessRegistrationDoneScreenText {
  return { title: "", description: "", nextButtonText: "", cancelButtonText: "", descriptionClose: "" };
}

export const PasswordlessRegistrationDoneScreenText = {
  encode(message: PasswordlessRegistrationDoneScreenText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.nextButtonText !== "") {
      writer.uint32(26).string(message.nextButtonText);
    }
    if (message.cancelButtonText !== "") {
      writer.uint32(34).string(message.cancelButtonText);
    }
    if (message.descriptionClose !== "") {
      writer.uint32(42).string(message.descriptionClose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessRegistrationDoneScreenText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordlessRegistrationDoneScreenText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextButtonText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelButtonText = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.descriptionClose = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordlessRegistrationDoneScreenText>): PasswordlessRegistrationDoneScreenText {
    return PasswordlessRegistrationDoneScreenText.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordlessRegistrationDoneScreenText>): PasswordlessRegistrationDoneScreenText {
    const message = createBasePasswordlessRegistrationDoneScreenText();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.nextButtonText = object.nextButtonText ?? "";
    message.cancelButtonText = object.cancelButtonText ?? "";
    message.descriptionClose = object.descriptionClose ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
