---
title: CPointPush
---

```csharp
public interface CPointPush : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPointPush>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ConeOfInfluence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L24)

```csharp
ref float ConeOfInfluence { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L16)

```csharp
ref bool Enabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Filter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L28)

```csharp
ref CHandle<CBaseFilter> Filter { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseFilter](/docs/api/shared/schemadefinitions/cbasefilter)>

### **FilterName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L26)

```csharp
string FilterName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **InnerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L22)

```csharp
ref float InnerRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Magnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L18)

```csharp
ref float Magnitude { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointPush.cs#L20)

```csharp
ref float Radius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

