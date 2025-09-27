---
title: CShatterGlassShard
---

```csharp
public interface CShatterGlassShard : ISchemaClass<CShatterGlassShard>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Area** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L46)

```csharp
ref float Area { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AverageVertPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L52)

```csharp
ref Vector2D AverageVertPosition { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**AverageVertPositionIsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L54)

```csharp
ref bool AverageVertPositionIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**CreatedModel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L34)

```csharp
ref bool CreatedModel { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**EntityHittingMe** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L68)

```csharp
ref CHandle<CBaseEntity> EntityHittingMe { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**FlaggedForRemoval** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L64)

```csharp
ref bool FlaggedForRemoval { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LocalPanelSpaceOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L20)

```csharp
ref Vector2D LocalPanelSpaceOrigin { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**LongestAcross** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L40)

```csharp
ref float LongestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LongestEdge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L36)

```csharp
ref float LongestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Model** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

**Neighbors** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L70)

```csharp
ref CUtlVector<uint> Neighbors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**OnFrameEdge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L48)

```csharp
ref OnFrame OnFrameEdge { get; }
```

#### Property Value

- [OnFrame](/docs/api/shared/schemadefinitions/onframe)

**PanelSpaceStressPositionA** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L56)

```csharp
ref Vector2D PanelSpaceStressPositionA { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**PanelSpaceStressPositionB** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L58)

```csharp
ref Vector2D PanelSpaceStressPositionB { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**PanelVertices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L18)

```csharp
ref CUtlVector<Vector2D> PanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[Vector2D](/docs/api/shared/natives/vector2d)>

**ParentPanel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L26)

```csharp
ref CHandle<CFuncShatterglass> ParentPanel { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CFuncShatterglass](/docs/api/shared/schemadefinitions/cfuncshatterglass)>

**ParentShard** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L28)

```csharp
ref uint ParentShard { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**PhysicsEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L24)

```csharp
ref CHandle<CShatterGlassShardPhysics> PhysicsEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CShatterGlassShardPhysics](/docs/api/shared/schemadefinitions/cshatterglassshardphysics)>

**PhysicsEntitySpawnedAtTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L66)

```csharp
GameTime_t PhysicsEntitySpawnedAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**ShardHandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L16)

```csharp
ref uint ShardHandle { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ShatterStressType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L30)

```csharp
ref ShatterGlassStressType ShatterStressType { get; }
```

#### Property Value

- [ShatterGlassStressType](/docs/api/shared/schemadefinitions/shatterglassstresstype)

**ShortestAcross** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L42)

```csharp
ref float ShortestAcross { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ShortestEdge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L38)

```csharp
ref float ShortestEdge { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**StressPositionAIsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L60)

```csharp
ref bool StressPositionAIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**StressPositionBIsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L62)

```csharp
ref bool StressPositionBIsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**StressVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L32)

```csharp
ref Vector StressVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**SubShardGeneration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L50)

```csharp
ref int SubShardGeneration { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SumOfAllEdges** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CShatterGlassShard.cs#L44)

```csharp
ref float SumOfAllEdges { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

