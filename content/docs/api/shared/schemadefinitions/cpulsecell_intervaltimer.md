---
title: CPulseCell_IntervalTimer
---

```csharp
public interface CPulseCell_IntervalTimer : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_IntervalTimer>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Completed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_IntervalTimer.cs#L16)

```csharp
CPulse_ResumePoint Completed { get; }
```

- Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### **OnInterval** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_IntervalTimer.cs#L18)

```csharp
SignatureOutflow_Continue OnInterval { get; }
```

- Property Value

- [SignatureOutflow_Continue](/docs/api/shared/schemadefinitions/signatureoutflow_continue)

