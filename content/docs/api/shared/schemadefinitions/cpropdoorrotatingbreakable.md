---
title: CPropDoorRotatingBreakable
---

```csharp
public interface CPropDoorRotatingBreakable : CPropDoorRotating, CBasePropDoor, CDynamicProp, CBreakableProp, CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaClass<CDynamicProp>, ISchemaClass<CBasePropDoor>, ISchemaClass<CPropDoorRotating>, ISchemaClass<CPropDoorRotatingBreakable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Breakable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotatingBreakable.cs#L16)

```csharp
ref bool Breakable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CurrentDamageState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotatingBreakable.cs#L20)

```csharp
ref int CurrentDamageState { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DamageStates** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotatingBreakable.cs#L22)

```csharp
ref CUtlVector<CUtlSymbolLarge> DamageStates { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

### **IsAbleToCloseAreaPortals** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPropDoorRotatingBreakable.cs#L18)

```csharp
ref bool IsAbleToCloseAreaPortals { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

