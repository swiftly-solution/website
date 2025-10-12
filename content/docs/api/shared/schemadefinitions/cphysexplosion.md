---
title: CPhysExplosion
---

```csharp
public interface CPhysExplosion : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPhysExplosion>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AffectInvulnerableEnts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L32)

```csharp
ref bool AffectInvulnerableEnts { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ConvertToDebrisWhenPossible** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L30)

```csharp
ref bool ConvertToDebrisWhenPossible { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Damage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L20)

```csharp
ref float Damage { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **ExplodeOnSpawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L16)

```csharp
ref bool ExplodeOnSpawn { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **InnerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L26)

```csharp
ref float InnerRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Magnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L18)

```csharp
ref float Magnitude { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OnPushedPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L34)

```csharp
CEntityIOOutput OnPushedPlayer { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **PushScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L28)

```csharp
ref float PushScale { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L22)

```csharp
ref float Radius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TargetEntityName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysExplosion.cs#L24)

```csharp
string TargetEntityName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

