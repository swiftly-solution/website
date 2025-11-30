---
title: CSceneEventInfo
---

# Interface CSceneEventInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSceneEventInfo : ISchemaClass<CSceneEventInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSceneEventInfo>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClientSide

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L40)

```csharp
ref bool ClientSide { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasArrived

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L26)

```csharp
ref bool HasArrived { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsGesture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L32)

```csharp
ref bool IsGesture { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Layer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L18)

```csharp
ref int Layer { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Next

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L30)

```csharp
GameTime_t Next { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### Priority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L20)

```csharp
ref int Priority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SceneEventId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L38)

```csharp
SceneEventId_t SceneEventId { get; }
```

#### Property Value

- [SceneEventId_t](/docs/api/schemadefinitions/sceneeventid_t)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L22)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### ShouldRemove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L34)

```csharp
ref bool ShouldRemove { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Started

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L42)

```csharp
ref bool Started { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L36)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L28)

```csharp
ref int Type { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Weight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneEventInfo.cs#L24)

```csharp
ref float Weight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

