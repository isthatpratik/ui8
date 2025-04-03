export interface ContractTypeMapping {
    title: string;
    keyTerms: string[];
}

export const contractTypeMappings: Record<string, ContractTypeMapping> = {
    'Employment Contract': {
        title: 'Employment Contract',
        keyTerms: [
            'Position and Title',
            'Start Date',
            'Employment Type (Full-time/Part-time)',
            'Compensation and Benefits',
            'Working Hours',
            'Probation Period',
            'Termination Notice Period',
            'Confidentiality Clause',
            'Non-compete Agreement',
            'Intellectual Property Rights'
        ]
    },
    'Non-Disclosure Agreement': {
        title: 'Non-Disclosure Agreement',
        keyTerms: [
            'Definition of Confidential Information',
            'Purpose of Disclosure',
            'Duration of Agreement',
            'Obligations of Receiving Party',
            'Permitted Disclosures',
            'Return of Information',
            'Remedies for Breach',
            'Governing Law',
            'Termination Clause',
            'Survival Clause'
        ]
    },
    'Service Agreement': {
        title: 'Service Agreement',
        keyTerms: [
            'Service Description',
            'Service Duration',
            'Service Fees',
            'Payment Terms',
            'Service Level Agreement',
            'Termination Conditions',
            'Force Majeure',
            'Liability Limitations',
            'Warranties',
            'Dispute Resolution'
        ]
    },
    'Lease Agreement': {
        title: 'Lease Agreement',
        keyTerms: [
            'Property Description',
            'Lease Term',
            'Rent Amount',
            'Security Deposit',
            'Maintenance Responsibilities',
            'Utilities',
            'Insurance Requirements',
            'Subletting Policy',
            'Renewal Terms',
            'Default Conditions'
        ]
    },
    'Sales Contract': {
        title: 'Sales Contract',
        keyTerms: [
            'Product/Service Description',
            'Purchase Price',
            'Payment Terms',
            'Delivery Terms',
            'Warranties',
            'Returns Policy',
            'Title Transfer',
            'Risk of Loss',
            'Force Majeure',
            'Dispute Resolution'
        ]
    },
    'Partnership Agreement': {
        title: 'Partnership Agreement',
        keyTerms: [
            'Partnership Structure',
            'Capital Contributions',
            'Profit/Loss Sharing',
            'Management Rights',
            'Decision Making Process',
            'Partner Withdrawal',
            'Dispute Resolution',
            'Non-compete Terms',
            'Confidentiality',
            'Termination Conditions'
        ]
    },
    'Consulting Agreement': {
        title: 'Consulting Agreement',
        keyTerms: [
            'Scope of Services',
            'Consulting Fees',
            'Payment Schedule',
            'Expense Reimbursement',
            'Independent Contractor Status',
            'Confidentiality',
            'Intellectual Property',
            'Term and Termination',
            'Non-solicitation',
            'Governing Law'
        ]
    },
    'License Agreement': {
        title: 'License Agreement',
        keyTerms: [
            'Licensed Property',
            'License Type',
            'License Term',
            'License Fees',
            'Usage Rights',
            'Restrictions',
            'Maintenance and Support',
            'Termination Rights',
            'Infringement Remedies',
            'Governing Law'
        ]
    },
    'Franchise Agreement': {
        title: 'Franchise Agreement',
        keyTerms: [
            'Franchise Territory',
            'Franchise Fee',
            'Royalty Payments',
            'Operating Standards',
            'Training Requirements',
            'Marketing Obligations',
            'Renewal Terms',
            'Transfer Rights',
            'Termination Conditions',
            'Post-Termination Obligations'
        ]
    },
    'Joint Venture Agreement': {
        title: 'Joint Venture Agreement',
        keyTerms: [
            'Venture Purpose',
            'Capital Contributions',
            'Ownership Structure',
            'Management Structure',
            'Profit Distribution',
            'Decision Making',
            'Transfer Restrictions',
            'Exit Rights',
            'Dispute Resolution',
            'Termination Provisions'
        ]
    },
    'Distribution Agreement': {
        title: 'Distribution Agreement',
        keyTerms: [
            'Territory Rights',
            'Product Line',
            'Pricing Terms',
            'Ordering Process',
            'Delivery Terms',
            'Inventory Management',
            'Marketing Requirements',
            'Sales Targets',
            'Termination Rights',
            'Post-Termination Obligations'
        ]
    },
    'Supply Agreement': {
        title: 'Supply Agreement',
        keyTerms: [
            'Product Specifications',
            'Quantity Requirements',
            'Pricing Terms',
            'Delivery Schedule',
            'Quality Standards',
            'Inspection Rights',
            'Warranties',
            'Force Majeure',
            'Termination Rights',
            'Dispute Resolution'
        ]
    },
    'Confidentiality Agreement': {
        title: 'Confidentiality Agreement',
        keyTerms: [
            'Confidential Information Definition',
            'Purpose of Disclosure',
            'Obligations of Parties',
            'Duration',
            'Permitted Disclosures',
            'Return of Information',
            'Remedies for Breach',
            'Governing Law',
            'Termination Rights',
            'Survival Clause'
        ]
    },
    'Settlement Agreement': {
        title: 'Settlement Agreement',
        keyTerms: [
            'Settlement Amount',
            'Payment Terms',
            'Release of Claims',
            'Confidentiality',
            'No Admission of Liability',
            'Future Cooperation',
            'Tax Implications',
            'Enforcement Rights',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Loan Agreement': {
        title: 'Loan Agreement',
        keyTerms: [
            'Loan Amount',
            'Interest Rate',
            'Repayment Terms',
            'Collateral',
            'Default Conditions',
            'Prepayment Rights',
            'Late Payment Fees',
            'Security Interest',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Insurance Contract': {
        title: 'Insurance Contract',
        keyTerms: [
            'Coverage Scope',
            'Policy Term',
            'Premium Amount',
            'Deductibles',
            'Exclusions',
            'Claims Process',
            'Cancellation Rights',
            'Renewal Terms',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Real Estate Purchase Agreement': {
        title: 'Real Estate Purchase Agreement',
        keyTerms: [
            'Property Description',
            'Purchase Price',
            'Payment Terms',
            'Closing Date',
            'Contingencies',
            'Title Insurance',
            'Property Condition',
            'Inspection Rights',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Construction Contract': {
        title: 'Construction Contract',
        keyTerms: [
            'Project Scope',
            'Timeline',
            'Payment Schedule',
            'Change Orders',
            'Quality Standards',
            'Warranties',
            'Insurance Requirements',
            'Safety Requirements',
            'Dispute Resolution',
            'Termination Rights'
        ]
    },
    'Software License Agreement': {
        title: 'Software License Agreement',
        keyTerms: [
            'Software Description',
            'License Type',
            'Usage Rights',
            'Restrictions',
            'Maintenance and Support',
            'Updates',
            'Term and Termination',
            'Infringement Remedies',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Trademark License Agreement': {
        title: 'Trademark License Agreement',
        keyTerms: [
            'Trademark Description',
            'License Scope',
            'Territory',
            'Quality Control',
            'Royalty Terms',
            'Infringement Rights',
            'Term and Termination',
            'Assignment Rights',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Patent License Agreement': {
        title: 'Patent License Agreement',
        keyTerms: [
            'Patent Description',
            'License Scope',
            'Territory',
            'Royalty Terms',
            'Infringement Rights',
            'Improvements',
            'Term and Termination',
            'Assignment Rights',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Merger Agreement': {
        title: 'Merger Agreement',
        keyTerms: [
            'Transaction Structure',
            'Purchase Price',
            'Payment Terms',
            'Representations and Warranties',
            'Closing Conditions',
            'Termination Rights',
            'Break-up Fees',
            'Governing Law',
            'Dispute Resolution',
            'Post-Closing Obligations'
        ]
    },
    'Acquisition Agreement': {
        title: 'Acquisition Agreement',
        keyTerms: [
            'Transaction Structure',
            'Purchase Price',
            'Payment Terms',
            'Due Diligence',
            'Representations and Warranties',
            'Closing Conditions',
            'Termination Rights',
            'Break-up Fees',
            'Governing Law',
            'Post-Closing Obligations'
        ]
    },
    'Shareholder Agreement': {
        title: 'Shareholder Agreement',
        keyTerms: [
            'Share Ownership',
            'Voting Rights',
            'Dividend Policy',
            'Transfer Restrictions',
            'Pre-emptive Rights',
            'Drag-Along Rights',
            'Tag-Along Rights',
            'Dispute Resolution',
            'Governing Law',
            'Termination Provisions'
        ]
    },
    'Operating Agreement': {
        title: 'Operating Agreement',
        keyTerms: [
            'Company Structure',
            'Capital Contributions',
            'Profit Distribution',
            'Management Rights',
            'Decision Making',
            'Transfer Restrictions',
            'Exit Rights',
            'Dispute Resolution',
            'Governing Law',
            'Termination Provisions'
        ]
    },
    'Subscription Agreement': {
        title: 'Subscription Agreement',
        keyTerms: [
            'Subscription Terms',
            'Payment Schedule',
            'Cancellation Rights',
            'Auto-renewal Terms',
            'Refund Policy',
            'Service Level',
            'Termination Rights',
            'Governing Law',
            'Dispute Resolution',
            'Modification Rights'
        ]
    },
    'Sponsorship Agreement': {
        title: 'Sponsorship Agreement',
        keyTerms: [
            'Sponsorship Benefits',
            'Duration',
            'Financial Terms',
            'Brand Usage Rights',
            'Event Obligations',
            'Termination Rights',
            'Force Majeure',
            'Governing Law',
            'Dispute Resolution',
            'Modification Rights'
        ]
    },
    'Event Contract': {
        title: 'Event Contract',
        keyTerms: [
            'Event Description',
            'Date and Location',
            'Services Provided',
            'Payment Terms',
            'Cancellation Policy',
            'Force Majeure',
            'Insurance Requirements',
            'Liability Limitations',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Photography Contract': {
        title: 'Photography Contract',
        keyTerms: [
            'Scope of Services',
            'Event Details',
            'Deliverables',
            'Usage Rights',
            'Payment Terms',
            'Cancellation Policy',
            'Model Releases',
            'Copyright Terms',
            'Governing Law',
            'Dispute Resolution'
        ]
    },
    'Freelance Agreement': {
        title: 'Freelance Agreement',
        keyTerms: [
            'Scope of Work',
            'Project Timeline',
            'Payment Terms',
            'Deliverables',
            'Revision Rights',
            'Intellectual Property',
            'Confidentiality',
            'Termination Rights',
            'Governing Law',
            'Dispute Resolution'
        ]
    }
}; 