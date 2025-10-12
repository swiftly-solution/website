---
title: CPulseCell_WaitForObservable
---

```csharp
public interface CPulseCell_WaitForObservable : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_WaitForObservable>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Condition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForObservable.cs#L16)

```csharp
PulseObservableBoolExpression_t Condition { get; }
```

- Property Value

- [PulseObservableBoolExpression_t](/docs/api/shared/schemadefinitions/pulseobservableboolexpression_t)

### **OnTrue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForObservable.cs#L18)

```csharp
CPulse_ResumePoint OnTrue { get; }
```

- Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

