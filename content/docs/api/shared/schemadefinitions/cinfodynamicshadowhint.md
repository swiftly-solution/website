---
title: CInfoDynamicShadowHint
---

```csharp
public interface CInfoDynamicShadowHint : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CInfoDynamicShadowHint>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHint.cs#L16)

```csharp
ref bool Disabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Importance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHint.cs#L20)

```csharp
ref int Importance { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Light** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHint.cs#L24)

```csharp
ref CHandle<CBaseEntity> Light { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **LightChoice** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHint.cs#L22)

```csharp
ref int LightChoice { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Range** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHint.cs#L18)

```csharp
ref float Range { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

