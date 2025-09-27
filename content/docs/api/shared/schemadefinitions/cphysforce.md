---
title: CPhysForce
---

```csharp
public interface CPhysForce : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPhysForce>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AttachedObject** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L22)

```csharp
ref CHandle<CBaseEntity> AttachedObject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**Force** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L18)

```csharp
ref float Force { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ForceTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L20)

```csharp
ref float ForceTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Integrator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L26)

```csharp
CConstantForceController Integrator { get; }
```

#### Property Value

- [CConstantForceController](/docs/api/shared/schemadefinitions/cconstantforcecontroller)

**NameAttach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L16)

```csharp
ref CUtlSymbolLarge NameAttach { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**WasRestored** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L24)

```csharp
ref bool WasRestored { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

