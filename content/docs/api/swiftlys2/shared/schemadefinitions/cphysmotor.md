---
title: CPhysMotor
---

```csharp
public interface CPhysMotor : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPhysMotor>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AdditionalAcceleration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L30)

```csharp
ref float AdditionalAcceleration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AnchorObject** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L22)

```csharp
ref CHandle<CBaseEntity> AnchorObject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**AngularAcceleration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L32)

```csharp
ref float AngularAcceleration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**AttachedObject** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L20)

```csharp
ref CHandle<CBaseEntity> AttachedObject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**Motor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L40)

```csharp
CMotorController Motor { get; }
```

#### Property Value

- [CMotorController](/docs/api/shared/schemadefinitions/cmotorcontroller)

**MotorFriction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L28)

```csharp
ref float MotorFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NameAnchor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L18)

```csharp
string NameAnchor { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**NameAttach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L16)

```csharp
string NameAttach { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**SpeedWhenSpinUpOrSpinDownStarted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L38)

```csharp
ref float SpeedWhenSpinUpOrSpinDownStarted { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SpinDown** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L26)

```csharp
ref float SpinDown { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SpinUp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L24)

```csharp
ref float SpinUp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TargetSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L36)

```csharp
ref float TargetSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TorqueScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMotor.cs#L34)

```csharp
ref float TorqueScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

