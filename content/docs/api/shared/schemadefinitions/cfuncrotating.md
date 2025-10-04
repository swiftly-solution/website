---
title: CFuncRotating
---

```csharp
public interface CFuncRotating : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncRotating>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AccelDecel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L41)

```csharp
ref bool AccelDecel { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Attenuation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L27)

```csharp
ref float Attenuation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**BlockDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L35)

```csharp
ref float BlockDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ClientAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L51)

```csharp
ref QAngle ClientAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**ClientOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L49)

```csharp
ref Vector ClientOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**FanFriction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L25)

```csharp
ref float FanFriction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LocalRotationVector** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L23)

```csharp
SchemaUntypedField LocalRotationVector { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**MaxSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L33)

```csharp
ref float MaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**NoiseRunning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L37)

```csharp
string NoiseRunning { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**OnReachedStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L20)

```csharp
CEntityIOOutput OnReachedStart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnStarted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L18)

```csharp
CEntityIOOutput OnStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnStopped** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L16)

```csharp
CEntityIOOutput OnStopped { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**PrevLocalAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L43)

```csharp
ref QAngle PrevLocalAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**Reversed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L39)

```csharp
ref bool Reversed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Start** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L45)

```csharp
ref QAngle Start { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**StopAtStartPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L47)

```csharp
ref bool StopAtStartPos { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TargetSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L31)

```csharp
ref float TargetSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Volume** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotating.cs#L29)

```csharp
ref float Volume { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

