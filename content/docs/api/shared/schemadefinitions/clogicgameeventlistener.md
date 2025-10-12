---
title: CLogicGameEventListener
---

```csharp
public interface CLogicGameEventListener : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicGameEventListener>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L22)

```csharp
ref bool Enabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GameEventItem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L20)

```csharp
string GameEventItem { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **GameEventName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L18)

```csharp
string GameEventName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **OnEventFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L16)

```csharp
CEntityIOOutput OnEventFired { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **StartDisabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L24)

```csharp
ref bool StartDisabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **EnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicGameEventListener.cs#L26)

```csharp
void EnabledUpdated()
```

