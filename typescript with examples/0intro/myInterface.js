var sahaj = { dbId: 22,
    email: "sahaj@sahaj.com",
    userId: 12,
    githubToken: "github",
    startTrail: function () { return "trail started"; },
    getCoupon: function (name) { return 10; }
};
var saz = { dbId: 22,
    email: "sahaj@sahaj.com",
    userId: 12,
    githubToken: "github",
    role: "Admin",
    startTrail: function () { return "trail started"; },
    getCoupon: function (name) { return 10; }
};
console.log(sahaj);
console.log(sahaj.startTrail());
console.log(sahaj.getCoupon("sahaj12"));
sahaj.email = 'sahaj@saz.com';
console.log(saz);
