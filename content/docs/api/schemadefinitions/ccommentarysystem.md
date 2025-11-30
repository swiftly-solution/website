---
title: CCommentarySystem
---

# Interface CCommentarySystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCommentarySystem : ISchemaClass<CCommentarySystem>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CCommentarySystem>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActiveCommentaryNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L32)

```csharp
ref CHandle<CPointCommentaryNode> ActiveCommentaryNode { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CPointCommentaryNode](/docs/api/schemadefinitions/cpointcommentarynode)>

### CheatState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L26)

```csharp
ref bool CheatState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CommentaryConvarsChanging

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L18)

```csharp
ref bool CommentaryConvarsChanging { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CommentaryEnabledMidGame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L20)

```csharp
ref bool CommentaryEnabledMidGame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CurrentNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L30)

```csharp
ref CHandle<CPointCommentaryNode> CurrentNode { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CPointCommentaryNode](/docs/api/schemadefinitions/cpointcommentarynode)>

### IsFirstSpawnGroupToLoad

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L28)

```csharp
ref bool IsFirstSpawnGroupToLoad { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastCommentaryNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L34)

```csharp
ref CHandle<CPointCommentaryNode> LastCommentaryNode { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CPointCommentaryNode](/docs/api/schemadefinitions/cpointcommentarynode)>

### NextTeleportTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L22)

```csharp
GameTime_t NextTeleportTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Nodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L36)

```csharp
ref CUtlVector<CHandle<CPointCommentaryNode>> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CPointCommentaryNode](/docs/api/schemadefinitions/cpointcommentarynode)>>

### TeleportStage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCommentarySystem.cs#L24)

```csharp
ref int TeleportStage { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

