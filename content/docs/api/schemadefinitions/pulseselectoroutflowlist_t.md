---
title: PulseSelectorOutflowList_t
---

# Interface PulseSelectorOutflowList_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseSelectorOutflowList_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PulseSelectorOutflowList_t : ISchemaClass<PulseSelectorOutflowList_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PulseSelectorOutflowList_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Outflows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseSelectorOutflowList_t.cs#L18)

```csharp
ref CUtlVector<OutflowWithRequirements_t> Outflows { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[OutflowWithRequirements_t](/docs/api/schemadefinitions/outflowwithrequirements_t)>

