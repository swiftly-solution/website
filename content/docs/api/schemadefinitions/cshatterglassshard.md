---
title: CShatterGlassShard
---

# Interface CShatterGlassShard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CShatterGlassShard : ISchemaClass<CShatterGlassShard>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CShatterGlassShard>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Area

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L48)

```csharp
ref float Area { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AverageVertPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L54)

```csharp
ref Vector2D AverageVertPosition { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### AverageVertPositionIsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L56)

```csharp
ref bool AverageVertPositionIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreatedModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L36)

```csharp
ref bool CreatedModel { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityHittingMe

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L70)

```csharp
ref CHandle<CBaseEntity> EntityHittingMe { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### FlaggedForRemoval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L66)

```csharp
ref bool FlaggedForRemoval { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalPanelSpaceOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L22)

```csharp
ref Vector2D LocalPanelSpaceOrigin { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### LongestAcross

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L42)

```csharp
ref float LongestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LongestEdge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L38)

```csharp
ref float LongestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Model

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### Neighbors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L72)

```csharp
ref CUtlVector<uint> Neighbors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### OnFrameEdge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L50)

```csharp
ref OnFrame OnFrameEdge { get; }
```

#### Property Value

- [OnFrame](/docs/api/schemadefinitions/onframe)

### PanelSpaceStressPositionA

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L58)

```csharp
ref Vector2D PanelSpaceStressPositionA { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### PanelSpaceStressPositionB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L60)

```csharp
ref Vector2D PanelSpaceStressPositionB { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### PanelVertices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L20)

```csharp
ref CUtlVector<Vector2D> PanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector2D](/docs/api/natives/vector2d)>

### ParentPanel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L28)

```csharp
ref CHandle<CFuncShatterglass> ParentPanel { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CFuncShatterglass](/docs/api/schemadefinitions/cfuncshatterglass)>

### ParentShard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L30)

```csharp
ref uint ParentShard { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PhysicsEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L26)

```csharp
ref CHandle<CShatterGlassShardPhysics> PhysicsEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CShatterGlassShardPhysics](/docs/api/schemadefinitions/cshatterglassshardphysics)>

### PhysicsEntitySpawnedAtTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L68)

```csharp
GameTime_t PhysicsEntitySpawnedAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### ShardHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L18)

```csharp
ref uint ShardHandle { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ShatterStressType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L32)

```csharp
ref ShatterGlassStressType ShatterStressType { get; }
```

#### Property Value

- [ShatterGlassStressType](/docs/api/schemadefinitions/shatterglassstresstype)

### ShortestAcross

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L44)

```csharp
ref float ShortestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShortestEdge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L40)

```csharp
ref float ShortestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StressPositionAIsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L62)

```csharp
ref bool StressPositionAIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StressPositionBIsValid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L64)

```csharp
ref bool StressPositionBIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StressVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L34)

```csharp
ref Vector StressVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SubShardGeneration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L52)

```csharp
ref int SubShardGeneration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SumOfAllEdges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L46)

```csharp
ref float SumOfAllEdges { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

