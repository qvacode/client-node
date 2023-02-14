import 'dotenv/config';

import { login, register, logout } from './api/auth';
import { getUser, deposit, updateaUser, withdraw } from './api/user';
import { Deposit, Withdraw } from './interfaces';
import { Login } from './interfaces/login';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

const newDeposit: Deposit = {
  pay_method: 'BTCLN',
  amount: 67,
};

const newWithdraw: Withdraw = {
  pay_method: 'BTCLN',
  amount: 8,
  details: [
    {
      Wallet: 'bc1qs67kwcf7znpnc06xjh8cnc0zwsechcfxscghun',
    },
  ],
};

(async () => {
  const data = await logout(
    '377448|dYQ5hYOcKp3erKKVZny3jxebwmuymnjJI1KakmGb'
  );
  console.log(data);
})();