const CRM_ENDPOINT = 'https://thequotemasters.com/crm_api/api.php?action=push_lead';
const INDUSTRY_ID = 23;
const ZIP = '55075';

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts.shift() || '';
  const last = parts.join(' ') || first;
  return { first, last };
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = process.env.CRM_API_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'Server misconfiguration' });
    return;
  }

  const body = req.body || {};
  const { name, church, phone, email, service, notes, utm_source } = body;

  if (!name || !church || !phone || !email) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const { first, last } = splitName(String(name));

  const payload = {
    zip: ZIP,
    customer: {
      company_name: String(church),
      first_name: first,
      last_name: last,
      position: '',
      phone: String(phone).replace(/\D/g, ''),
      email: String(email),
      email2: '',
      address: '',
      service_address: '',
      notes: [service ? `Service: ${service}` : '', notes || ''].filter(Boolean).join(' — '),
    },
    industry: INDUSTRY_ID,
    questions: [],
    appointments: [],
    number_of_quotes: '1',
    utm_source: utm_source || '',
  };

  try {
    const crmResponse = await fetch(CRM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!crmResponse.ok) {
      res.status(502).json({ error: 'Lead submission failed' });
      return;
    }

    res.status(200).json({ success: true });
  } catch {
    res.status(502).json({ error: 'Lead submission failed' });
  }
};
