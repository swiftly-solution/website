---
title: CEnvEntityMaker
---

```csharp
public interface CEnvEntityMaker : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CEnvEntityMaker>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlockerOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L24)

```csharp
ref Vector BlockerOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CurrentBlocker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L22)

```csharp
ref CHandle<CBaseEntity> CurrentBlocker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### CurrentInstance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L20)

```csharp
ref CHandle<CBaseEntity> CurrentInstance { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### EntityMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L18)

```csharp
ref Vector EntityMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EntityMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L16)

```csharp
ref Vector EntityMins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OutputOnFailedSpawn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L38)

```csharp
CEntityIOOutput OutputOnFailedSpawn { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OutputOnSpawned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L36)

```csharp
CEntityIOOutput OutputOnSpawned { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PostSpawnDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L26)

```csharp
ref QAngle PostSpawnDirection { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### PostSpawnDirectionVariance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L28)

```csharp
ref float PostSpawnDirectionVariance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostSpawnSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L30)

```csharp
ref float PostSpawnSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostSpawnUseAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L32)

```csharp
ref bool PostSpawnUseAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Template

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L34)

```csharp
string Template { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

