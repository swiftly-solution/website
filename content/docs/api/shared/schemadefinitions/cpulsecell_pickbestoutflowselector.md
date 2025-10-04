---
title: CPulseCell_PickBestOutflowSelector
---

```csharp
public interface CPulseCell_PickBestOutflowSelector : CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_PickBestOutflowSelector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CheckType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PickBestOutflowSelector.cs#L16)

```csharp
ref PulseBestOutflowRules_t CheckType { get; }
```

#### Property Value

- [PulseBestOutflowRules_t](/docs/api/shared/schemadefinitions/pulsebestoutflowrules_t)

**OutflowList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PickBestOutflowSelector.cs#L18)

```csharp
PulseSelectorOutflowList_t OutflowList { get; }
```

#### Property Value

- [PulseSelectorOutflowList_t](/docs/api/shared/schemadefinitions/pulseselectoroutflowlist_t)

