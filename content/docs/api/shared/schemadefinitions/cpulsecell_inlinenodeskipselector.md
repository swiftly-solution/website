---
title: CPulseCell_InlineNodeSkipSelector
---

```csharp
public interface CPulseCell_InlineNodeSkipSelector : CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_InlineNodeSkipSelector>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **And** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L18)

```csharp
ref bool And { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FailOutflow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L22)

```csharp
CPulse_OutflowConnection FailOutflow { get; }
```

- Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

### **FlowNodeID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L16)

```csharp
PulseDocNodeID_t FlowNodeID { get; }
```

- Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### **PassOutflow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L20)

```csharp
PulseSelectorOutflowList_t PassOutflow { get; }
```

- Property Value

- [PulseSelectorOutflowList_t](/docs/api/shared/schemadefinitions/pulseselectoroutflowlist_t)

