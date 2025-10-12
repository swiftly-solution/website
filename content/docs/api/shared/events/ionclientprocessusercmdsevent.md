---
title: IOnClientProcessUsercmdsEvent
---

```csharp
public interface IOnClientProcessUsercmdsEvent
```

## Properties

### **Margin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L29)

```csharp
float Margin { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Paused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L24)

```csharp
bool Paused { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayerId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L14)

```csharp
int PlayerId { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Usercmds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientProcessUsercmdsEvent.cs#L19)

```csharp
List<CSGOUserCmdPB> Usercmds { get; }
```

- Property Value

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[CSGOUserCmdPB](/docs/api/shared/protobufdefinitions/csgousercmdpb)>

