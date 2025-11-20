---
title: CDirectPlaybackUpdateNode
---

```csharp
public interface CDirectPlaybackUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CDirectPlaybackUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllTags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L22)

```csharp
ref CUtlVector<CDirectPlaybackTagData> AllTags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CDirectPlaybackTagData](/docs/api/shared/schemadefinitions/cdirectplaybacktagdata)>

### FinishEarly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L18)

```csharp
ref bool FinishEarly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackUpdateNode.cs#L20)

```csharp
ref bool ResetOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

