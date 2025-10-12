---
title: CPlayer_ItemServices
---

```csharp
public interface CPlayer_ItemServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_ItemServices>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Methods

### **DropActiveItem()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L25)

```csharp
void DropActiveItem()
```

### **GiveItem<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L13)

```csharp
T GiveItem<T>() where T : ISchemaClass<T>
```

- Returns

- T - The item that was given.

- Type Parameters

- **T**:  - The type of the item to give.

### **GiveItem<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L20)

```csharp
T GiveItem<T>(string itemDesignerName) where T : ISchemaClass<T>
```

- Parameters

- **itemDesignerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the item to give.

- Returns

- T - The item that was given.

- Type Parameters

- **T**: 

### **RemoveItems()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L30)

```csharp
void RemoveItems()
```

