---
title: CMolotovProjectile
---

```csharp
public interface CMolotovProjectile : CBaseCSGrenadeProjectile, CBaseGrenade, CBaseFlex, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseFlex>, ISchemaClass<CBaseGrenade>, ISchemaClass<CBaseCSGrenadeProjectile>, ISchemaClass<CMolotovProjectile>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Detonated** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L18)

```csharp
ref bool Detonated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HasBouncedOffPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L22)

```csharp
ref bool HasBouncedOffPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsIncGrenade** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L16)

```csharp
ref bool IsIncGrenade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **StillTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L20)

```csharp
IntervalTimer StillTimer { get; }
```

#### Property Value

- [IntervalTimer](/docs/api/shared/schemadefinitions/intervaltimer)

## Methods

### **IsIncGrenadeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMolotovProjectile.cs#L24)

```csharp
void IsIncGrenadeUpdated()
```

