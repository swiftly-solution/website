---
title: CDirectPlaybackUpdateNode
---

# Interface CDirectPlaybackUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDirectPlaybackUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CDirectPlaybackUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CDirectPlaybackUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllTags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L22)

```csharp
ref CUtlVector<CDirectPlaybackTagData> AllTags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CDirectPlaybackTagData](/docs/api/schemadefinitions/cdirectplaybacktagdata)>

### FinishEarly

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L18)

```csharp
ref bool FinishEarly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetOnFinish

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L20)

```csharp
ref bool ResetOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

