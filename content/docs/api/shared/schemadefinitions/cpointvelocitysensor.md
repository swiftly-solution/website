---
title: CPointVelocitySensor
---

```csharp
public interface CPointVelocitySensor : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPointVelocitySensor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AvgInterval

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L25)

```csharp
ref float AvgInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Axis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L19)

```csharp
ref Vector Axis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L21)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PrevVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L23)

```csharp
ref float PrevVelocity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L17)

```csharp
ref CHandle<CBaseEntity> TargetEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Velocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointVelocitySensor.cs#L28)

```csharp
SchemaUntypedField Velocity { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

