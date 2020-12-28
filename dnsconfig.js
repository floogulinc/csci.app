/*
   dnsconfig.js: dnscontrol configuration file for csci.app
*/

DEFAULTS(
  CF_PROXY_DEFAULT_OFF // turn proxy off when not specified otherwise
);

// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var CLOUDFLARE = NewDnsProvider('cloudflare','CLOUDFLAREAPI');

// Domains:

D('csci.app', REG_NONE, DnsProvider(CLOUDFLARE),

  ALIAS('@', 'floogulinc.github.io.'),

  // sslip.io wildcard DNS
  NS('ip', 'ns-aws.nono.io.'),
  NS('ip', 'ns-gce.nono.io.'),
  NS('ip', 'ns-azure.nono.io.')

);
