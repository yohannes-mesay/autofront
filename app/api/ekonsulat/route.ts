import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const response = await fetch(
    "https://api.e-konsulat.gov.pl/api/rezerwacja-wizyt-wizowych/terminy/446/4",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token:
          "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hadwYXNza2V5xQZQTfJZ_RNbNfSopke6suIksjSs8RuWu1byQpMGxRlIJop6zubb_BHPmWnjAylk-rVGe3fr-8jmyFormUu7if4iW9kkHzFQvRV-Fppc5A2U3D5ZrPbUe9awic41GvX-zXc6a6c4NddICLZziw8d7RRToKEDuleCXQ9ZbPmmVSZXvi4N1h_fV_X3Y0Mx7YkZyrjZ5fP15Xj1edu8Q5Xa20u0LSineZBxL7J6XUiEkwYiRXfehrO9JngDcjfABUDSn3c3K8ziwWOSXYLUH0EQ5DfrzIf9WJsvm6RaOj4EThMvFmbARWTvILcgi7zN9ulEvHdsmEzPKDRMkxfnKQ1noLDlidH5joobEOC4wMuxd32HP0-bcQKtUmIBxXbm9AenOJBzPeqIsyJafbA3XY9HhMUs5sfRYm8mfDzYDg_1Wf_ygotkln64b_HMN4kn4sgt7MLp_lVuvCZZtv8Yx_NRqd4Bwtr70Oa6nOPkDY2CdFmDV1My1JZ1Po_4mQvalPUaTZczSC5T2I7ceY2ES2WKkU0r00q2lkP3b4YF8cz3wk3MhJU409gxy98ptqR6FeigX5mhV_piidUwHBBiYlDxzBMzK9Bxr9TSxpo_-UCv3rKHMp6auG2LO0NuxDO0jxt2T7mmR4BC0Vnh4i2rUgwfnUw-lk7Nb30lLTqA6T9SvKOFe9oCBFD3N4me7ph9hfYIPWY9ZKfGsC55KQzZF6svV8qKrHAPfcqy8i0cVRglq2BRazLuNlllS6994KZ6dAcm4gcP0F1ZmqNuU3xxgRBQjXaZGUk4RU-hq01JinhjU1tn_v0V7Ai7YVla6uLaYOgWUtunRPeZThRHiqjJZ4JrhwasFTqzRz7euZiRabaPwR8x_ZBLSEFllytz_C6mifcC9UmSGWSw408NmRDKzOjHApJcspGQk1ndEIlfge5rX9y-BzDD0NaI4XDTMZC97n8C9WERcClYmQIA14ZelsEXZ8xWwAI8mfp-IZ8sISgTBTZpSs18LYE0lC4jd2oNmTGmu61a7Cva_cqQyPkPEqy3uNzKtQT5g9M0NbCbMNqyWydlUaVs3l6epJy9t0fsBHPxlMyO4-0pXY2ItrwuO1hAmP3FajoLsOhHR0U890pQFeCjtG52eUlKxL8oRcjEqUmEGuJcKBct2Bgly--931BTdqitQRiTDZC4oz0XyGP6y3_6j6ZslQ1Vjg1TURVvtuYVyAuk8-6SrIQSiUj9uKrhDReUmEdSPY_U3zSEU3r4Bn5RH6XmeOZwUFRJ5uJIyFE3PVHy5YF3AFgEIkYzFdtrQWvtUhF2Dl1HJCbbDz5Fb53uIi8VknIi_9myEknMb-Ul6RWqkWn6RHekiIFLxfvX2bdZGywENYX23yfdBxKoSVxeOctwuZkWT1LwEPIlv2LhuvSNhad40TYevCh9WPygHvriKo6c1rvZLxI8ClSl3Ol2FGUjNjnSZQ6ztR4fB5kzrsAzPX95jG9uIZ7u0j_We827NcavOyFe6RtJcacyqBQfEcDXwhOVrQYtJ7Wf2XmQgwqvdxJkGGrTLAjuymfRPlmLaDmiLyf8eAxSJdlUDG-hiUYBWKsb9ci4WCJEf-AQ990EsN6RLOVf2Qsmie6Yqjey5Wbzk4r8fGmNMYVPvlI8FRym9Q-4yERSLufpT8WfThWdFA0Tr6GajWrxzubL4aworN_9n7JaiDg68nxAGYIvQSqnlm9kYQE2Jo2_lGmZsNXhnWQJoTZskp2plTDF82WxILaLkxuagEZ0OrPdaInFg3qyRCxmdMemM5db3DT9SXhB9utXZ8IZbZ5XYz__DE0xDwVzlZMhVWmi7lDvJVACri7RQ7-TOQ8bkGdhzTGHmKws_72vn8ouEj5oqBUtn9vfRiPLc3Yyh40_Ky34uceS8igWSQZ2xSzb4aRg5KZXewdIdT7_NtVgR0C3pJCC_YlofTsAx4oNCCmraVE3PU6Qj7htCSDY1-PetPI6poxVGycb4IPl6Wz9zMT3CSPU_PWwrAu8v1uQS-Sn_YXSJpDcqv04_YshVOh0eSw_r5qnv1xW7Z3wCpw4TOu8tcEl9LLyQ2GRWr23RFlYgpVnFE9c3RQWTA02PslnVD_9jQheNbCk50lqGy7ORjuqiw8J30W_oUd7euDXrPDXCARa6ABh19ijZXhwzmedyvWoc2hhcmRfaWTOMa1MgaJrcqgzYWM0YjlhNKJwZAA.lA_sCZbYT8mEuaLfieQ5-hs-pEXhK30VtcoRrFP8PUs",
      }),
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
