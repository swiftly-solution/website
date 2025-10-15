---
title: CEnvShake
---

```csharp
public interface CEnvShake : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CEnvShake>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Amplitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L19)

```csharp
ref float Amplitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CurrentAmp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L31)

```csharp
ref float CurrentAmp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L23)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Frequency

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L21)

```csharp
ref float Frequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LimitToEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L17)

```csharp
string LimitToEntity { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L33)

```csharp
ref Vector MaxForce { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NextShake

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L29)

```csharp
GameTime_t NextShake { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L25)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShakeCallback

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L35)

```csharp
CPhysicsShake ShakeCallback { get; }
```

#### Property Value

- [CPhysicsShake](/docs/api/shared/schemadefinitions/cphysicsshake)

### StopTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvShake.cs#L27)

```csharp
GameTime_t StopTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

