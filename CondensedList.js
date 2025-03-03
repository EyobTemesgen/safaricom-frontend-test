function condense(head) {
    if (!head) {
      return null;
    }
  
    let current = head;
    let seen = new Set();
  
    while (current) {
      seen.add(current.data);
  
      while (current.next && seen.has(current.next.data)) {
        current.next = current.next.next;
      }
  
      current = current.next;
    }
  
    return head;
  }