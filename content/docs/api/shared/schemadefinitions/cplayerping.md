---
title: CPlayerPing
---

```csharp
public interface CPlayerPing : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPlayerPing>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **PingedEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L18)

```csharp
ref CHandle<CBaseEntity> PingedEntity { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### **PlaceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L24)

```csharp
string PlaceName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Player** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L16)

```csharp
ref CHandle<CCSPlayerPawn> Player { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L20)

```csharp
ref int Type { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Urgent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L22)

```csharp
ref bool Urgent { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **PingedEntityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L27)

```csharp
void PingedEntityUpdated()
```

### **PlaceNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L30)

```csharp
void PlaceNameUpdated()
```

### **PlayerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L26)

```csharp
void PlayerUpdated()
```

### **TypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L28)

```csharp
void TypeUpdated()
```

### **UrgentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPing.cs#L29)

```csharp
void UrgentUpdated()
```

