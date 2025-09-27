---
title: CPhysMagnet
---

```csharp
public interface CPhysMagnet : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CPhysMagnet>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L29)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ForceLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L22)

```csharp
ref float ForceLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**HasHitSomething** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L31)

```csharp
ref bool HasHitSomething { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MagnettedEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L27)

```csharp
ref CUtlVector MagnettedEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**MassScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L20)

```csharp
ref float MassScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MaxObjectsAttached** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L39)

```csharp
ref int MaxObjectsAttached { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NextSuckTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L37)

```csharp
GameTime_t NextSuckTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**OnMagnetAttach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L16)

```csharp
CEntityIOOutput OnMagnetAttach { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnMagnetDetach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L18)

```csharp
CEntityIOOutput OnMagnetDetach { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L35)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TorqueLimit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L24)

```csharp
ref float TorqueLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TotalMass** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysMagnet.cs#L33)

```csharp
ref float TotalMass { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

