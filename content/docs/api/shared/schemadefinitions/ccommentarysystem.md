---
title: CCommentarySystem
---

```csharp
public interface CCommentarySystem : ISchemaClass<CCommentarySystem>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActiveCommentaryNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L32)

```csharp
ref CHandle<CPointCommentaryNode> ActiveCommentaryNode { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPointCommentaryNode](/docs/api/shared/schemadefinitions/cpointcommentarynode)>

### CheatState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L26)

```csharp
ref bool CheatState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CommentaryConvarsChanging

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L18)

```csharp
ref bool CommentaryConvarsChanging { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CommentaryEnabledMidGame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L20)

```csharp
ref bool CommentaryEnabledMidGame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CurrentNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L30)

```csharp
ref CHandle<CPointCommentaryNode> CurrentNode { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPointCommentaryNode](/docs/api/shared/schemadefinitions/cpointcommentarynode)>

### IsFirstSpawnGroupToLoad

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L28)

```csharp
ref bool IsFirstSpawnGroupToLoad { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastCommentaryNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L34)

```csharp
ref CHandle<CPointCommentaryNode> LastCommentaryNode { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CPointCommentaryNode](/docs/api/shared/schemadefinitions/cpointcommentarynode)>

### NextTeleportTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L22)

```csharp
GameTime_t NextTeleportTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Nodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L36)

```csharp
ref CUtlVector<CHandle<CPointCommentaryNode>> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CPointCommentaryNode](/docs/api/shared/schemadefinitions/cpointcommentarynode)>>

### TeleportStage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L24)

```csharp
ref int TeleportStage { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

