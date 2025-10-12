---
title: CTriggerBrush
---

```csharp
public interface CTriggerBrush : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CTriggerBrush>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **DontMessageParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBrush.cs#L24)

```csharp
ref int DontMessageParent { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **InputFilter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBrush.cs#L22)

```csharp
ref int InputFilter { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OnEndTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBrush.cs#L18)

```csharp
CEntityIOOutput OnEndTouch { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnStartTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBrush.cs#L16)

```csharp
CEntityIOOutput OnStartTouch { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnUse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerBrush.cs#L20)

```csharp
CEntityIOOutput OnUse { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

