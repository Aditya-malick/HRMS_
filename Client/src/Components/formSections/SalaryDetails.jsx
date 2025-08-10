import React from 'react';

const SalaryDetails = ({ formData, setFormData }) => {
  return (
    <div className="p-4 bg-white  h-[100%] rounded-3xl overflow-y-scroll">
      <h2 className="mb-2 text-xl font-semibold">Salary Details</h2>

      <label className="flex flex-col">
        gross *
        <input
        name='gross'
          type="number"
          value={formData.gross}
          onChange={(e) =>
            setFormData({ ...formData, gross: e.target.value })
          }
          placeholder="Enter base salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
       basic *
        <input
        name='basic'
          type="number"
          value={formData.basic}
          onChange={(e) =>
            setFormData({ ...formData, basic: e.target.value })
          }
          placeholder="Enter bonus amount"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        hra *
        <input
        name='hra'
          type="number"
          value={formData.hra}
          onChange={(e) =>
            setFormData({ ...formData, hra: e.target.value })
          }
          placeholder="Enter deductions"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        otherAllowances *
        <input
        name='otherAllowances'
          type="number"
          value={formData.otherAllowances}
          onChange={(e) =>
            setFormData({ ...formData, otherAllowances: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        bonuses *
        <input
        name='bonuses'
          type="number"
          value={formData.bonuses}
          onChange={(e) =>
            setFormData({ ...formData, bonuses: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        pf *
        <input
        name='pf'
          type="number"
          value={formData.pf}
          onChange={(e) =>
            setFormData({ ...formData, pf: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        esic *
        <input
        name='esic'
          type="number"
          value={formData.esic}
          onChange={(e) =>
            setFormData({ ...formData, esic: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        netPay *
        <input
        name='netPay'
          type="number"
          value={formData.netPay}
          onChange={(e) =>
            setFormData({ ...formData, netPay: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        accountNumber *
        <input
        name='accountNumber'
          type="number"
          value={formData.accountNumber}
          onChange={(e) =>
            setFormData({ ...formData, accountNumber: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        ifsc *
        <input
        name='ifsc'
          type="text"
          value={formData.ifsc}
          onChange={(e) =>
            setFormData({ ...formData, ifsc: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        bankName *
        <input
        name='bankName'
          type="text"
          value={formData.bankName}
          onChange={(e) =>
            setFormData({ ...formData, bankName: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        />
      </label>

      <label className="flex flex-col">
        uan 
        <input
        name='uan'
          type="text"
          value={formData.uan}
          onChange={(e) =>
            setFormData({ ...formData, uan: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        paymentMode *
        <select
          name='paymentMode'
          type="number"
          value={formData.paymentMode}
          onChange={(e) =>
            setFormData({ ...formData, paymentMode: e.target.value })
          }
          placeholder="Enter net salary"
          className="p-2 border rounded"
          required
        >
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
            <option value="UPI">UPI</option>
          </select>
      </label>
    </div>
  );
};

export default SalaryDetails;