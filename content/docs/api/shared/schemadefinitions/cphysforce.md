---
title: CPhysForce
---

```csharp
public interface CPhysForce : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPhysForce>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttachedObject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L23)

```csharp
ref CHandle<CBaseEntity> AttachedObject { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Force

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L19)

```csharp
ref float Force { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L21)

```csharp
ref float ForceTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Integrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L27)

```csharp
CConstantForceController Integrator { get; }
```

#### Property Value

- [CConstantForceController](/docs/api/shared/schemadefinitions/cconstantforcecontroller)

### NameAttach

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L17)

```csharp
string NameAttach { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WasRestored

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysForce.cs#L25)

```csharp
ref bool WasRestored { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

