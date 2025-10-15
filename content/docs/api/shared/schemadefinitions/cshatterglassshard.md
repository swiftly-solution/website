---
title: CShatterGlassShard
---

```csharp
public interface CShatterGlassShard : ISchemaClass<CShatterGlassShard>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Area

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L47)

```csharp
ref float Area { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AverageVertPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L53)

```csharp
ref Vector2D AverageVertPosition { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### AverageVertPositionIsValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L55)

```csharp
ref bool AverageVertPositionIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreatedModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L35)

```csharp
ref bool CreatedModel { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntityHittingMe

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L69)

```csharp
ref CHandle<CBaseEntity> EntityHittingMe { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### FlaggedForRemoval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L65)

```csharp
ref bool FlaggedForRemoval { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalPanelSpaceOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L21)

```csharp
ref Vector2D LocalPanelSpaceOrigin { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### LongestAcross

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L41)

```csharp
ref float LongestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LongestEdge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L37)

```csharp
ref float LongestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L23)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### Neighbors

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L71)

```csharp
ref CUtlVector<uint> Neighbors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### OnFrameEdge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L49)

```csharp
ref OnFrame OnFrameEdge { get; }
```

#### Property Value

- [OnFrame](/docs/api/shared/schemadefinitions/onframe)

### PanelSpaceStressPositionA

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L57)

```csharp
ref Vector2D PanelSpaceStressPositionA { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### PanelSpaceStressPositionB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L59)

```csharp
ref Vector2D PanelSpaceStressPositionB { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### PanelVertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L19)

```csharp
ref CUtlVector<Vector2D> PanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector2D](/docs/api/shared/natives/vector2d)>

### ParentPanel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L27)

```csharp
ref CHandle<CFuncShatterglass> ParentPanel { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CFuncShatterglass](/docs/api/shared/schemadefinitions/cfuncshatterglass)>

### ParentShard

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L29)

```csharp
ref uint ParentShard { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PhysicsEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L25)

```csharp
ref CHandle<CShatterGlassShardPhysics> PhysicsEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CShatterGlassShardPhysics](/docs/api/shared/schemadefinitions/cshatterglassshardphysics)>

### PhysicsEntitySpawnedAtTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L67)

```csharp
GameTime_t PhysicsEntitySpawnedAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### ShardHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L17)

```csharp
ref uint ShardHandle { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ShatterStressType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L31)

```csharp
ref ShatterGlassStressType ShatterStressType { get; }
```

#### Property Value

- [ShatterGlassStressType](/docs/api/shared/schemadefinitions/shatterglassstresstype)

### ShortestAcross

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L43)

```csharp
ref float ShortestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShortestEdge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L39)

```csharp
ref float ShortestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StressPositionAIsValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L61)

```csharp
ref bool StressPositionAIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StressPositionBIsValid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L63)

```csharp
ref bool StressPositionBIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StressVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L33)

```csharp
ref Vector StressVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SubShardGeneration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L51)

```csharp
ref int SubShardGeneration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SumOfAllEdges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L45)

```csharp
ref float SumOfAllEdges { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

