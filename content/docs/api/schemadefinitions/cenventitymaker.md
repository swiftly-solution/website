---
title: CEnvEntityMaker
---

# Interface CEnvEntityMaker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvEntityMaker : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CEnvEntityMaker>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPointEntity](/docs/api/schemadefinitions/cpointentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvEntityMaker>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlockerOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L26)

```csharp
ref Vector BlockerOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CurrentBlocker

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L24)

```csharp
ref CHandle<CBaseEntity> CurrentBlocker { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### CurrentInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L22)

```csharp
ref CHandle<CBaseEntity> CurrentInstance { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### EntityMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L20)

```csharp
ref Vector EntityMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### EntityMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L18)

```csharp
ref Vector EntityMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OutputOnFailedSpawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L40)

```csharp
CEntityIOOutput OutputOnFailedSpawn { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OutputOnSpawned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L38)

```csharp
CEntityIOOutput OutputOnSpawned { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### PostSpawnDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L28)

```csharp
ref QAngle PostSpawnDirection { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### PostSpawnDirectionVariance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L30)

```csharp
ref float PostSpawnDirectionVariance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostSpawnSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L32)

```csharp
ref float PostSpawnSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostSpawnUseAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L34)

```csharp
ref bool PostSpawnUseAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Template

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvEntityMaker.cs#L36)

```csharp
string Template { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

