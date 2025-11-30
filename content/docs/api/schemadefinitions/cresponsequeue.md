---
title: CResponseQueue
---

# Interface CResponseQueue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CResponseQueue.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CResponseQueue : ISchemaClass<CResponseQueue>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CResponseQueue>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ExpresserTargets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CResponseQueue.cs#L18)

```csharp
ref CUtlVector<PointerTo<CAI_Expresser>> ExpresserTargets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CAI_Expresser](/docs/api/schemadefinitions/cai_expresser)>>

