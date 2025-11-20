---
title: CPhysBox
---

```csharp
public interface CPhysBox : CBreakable, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBreakable>, ISchemaClass<CPhysBox>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CarryingPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L46)

```csharp
ref CHandle<CBasePlayerPawn> CarryingPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

### DamageToEnableMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L20)

```csharp
ref int DamageToEnableMotion { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DamageType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L18)

```csharp
ref int DamageType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EnableUseOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L30)

```csharp
ref bool EnableUseOutput { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceToEnableMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L22)

```csharp
ref float ForceToEnableMotion { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HoverPoseAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L26)

```csharp
ref QAngle HoverPoseAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### HoverPoseFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L32)

```csharp
ref HoverPoseFlags_t HoverPoseFlags { get; }
```

#### Property Value

- [HoverPoseFlags_t](/docs/api/shared/schemadefinitions/hoverposeflags_t)

### HoverPosePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L24)

```csharp
ref Vector HoverPosePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NotSolidToWorld

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L28)

```csharp
ref bool NotSolidToWorld { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnAwakened

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L38)

```csharp
CEntityIOOutput OnAwakened { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnDamaged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L36)

```csharp
CEntityIOOutput OnDamaged { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnMotionEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L40)

```csharp
CEntityIOOutput OnMotionEnabled { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPlayerUse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L42)

```csharp
CEntityIOOutput OnPlayerUse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnStartTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L44)

```csharp
CEntityIOOutput OnStartTouch { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### TouchOutputPerEntityDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysBox.cs#L34)

```csharp
ref float TouchOutputPerEntityDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

